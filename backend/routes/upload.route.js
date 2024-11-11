import express from 'express'
import { Upload } from '../controllers/upload.controller.js';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';


const router = express.Router()

router.post("/upload",protectRoute,adminRoute,Upload)

export default router;