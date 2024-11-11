import { redis } from "../lib/redis.js";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

const generateToken = (userId) => {
    const accessToken = jwt.sign(
        {userId},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "15m"}
    );
    const refreshToken = jwt.sign(
        {userId},
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: "7d"}
    );
    return {accessToken,refreshToken};
};
    
const storeRefreshToken =async (userId,refreshToken) => {
    await redis.set(`refreshToken:${userId}`,refreshToken, 'EX', 7 * 24 * 60 * 60);
}

const setCookies = (res, accessToken, refreshToken) => {
    res.cookie("accessToken",accessToken, {
        httpOnly: true, 
        secure:process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:15*60*1000 //15 minutes
    })

    res.cookie("refreshToken",refreshToken, {
        httpOnly: true, 
        secure:process.env.NODE_ENV === "production",
        sameSite:"strict",
        maxAge:7*24*60*60*1000, //7 days 
    })
}

export const Signup = async (req,res)=>{
    const {name,email,password} = req.body;

    try {
        const userExists = await User.findOne({email});

        if (userExists) {
            return res.status(400).send("User already exists");
        }
        const user = await User.create({
            name,
            email,
            password    
        })

//authentication
        const {accessToken,refreshToken} = generateToken(user._id);
        await storeRefreshToken(user._id,refreshToken);

        setCookies(res,accessToken,refreshToken);


        res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			role: user.role,
		});
    } catch (error) {
        console.log('Error creating user',error.message);
        res.status(500).send(error.message);    
    }
};

export const Login = async (req,res)=>{
    
    res.send("Login route called");
};

export const Logout = async (req,res)=>{
    try {
        const refreshToken = req.cookies.refreshToken;
        if(refreshToken){
            const decoded = jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET);
            await redis.del(`refreshToken:${decoded.userId}`);
        }

        res.clearCookie("accessToken");
        res.clearCookie("refreshToken");
        res.json({message : "Logout successful"});
    } catch (error) {
        res.status(500).send({message:"Error logging out" ,error:error.message});
    }
    res.send("Logout route called");
};
