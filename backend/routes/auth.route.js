import express from 'express'
import { Login, Logout, Signup } from '../controllers/auth.controllers.js';

const router = express.Router()

router.get("/signup",Signup)

router.get("/login",Login)

router.get("/logout",Logout)

export default router;
