import express from 'express'
import { Login, Logout, refreshToken, Signup } from '../controllers/auth.controllers.js';
import { Upload } from '../controllers/upload.controller.js';

const router = express.Router()

router.post("/signup",Signup)

router.post("/login",Login)

router.post("/logout",Logout)

router.post("/refreshToken",refreshToken)

//router.post("/upload",Upload)

export default router;
