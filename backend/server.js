import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser';
import { connectDB } from './lib/db.js';
import uploadRoutes from './routes/upload.route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//allows us to get data from req.body
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/admin", uploadRoutes)


app.listen(PORT,() => {
        console.log("server is running on http://localhost:" + PORT)
        connectDB()
})

 