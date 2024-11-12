import express from 'express'
import { Upload } from '../controllers/upload.controller.js';
import { adminRoute, protectRoute } from '../middleware/auth.middleware.js';
import { createPage, getAllPages } from '../controllers/page.controller.js';


const router = express.Router()

router.post("/upload",protectRoute,adminRoute,Upload);

router.get("/getAllPages",protectRoute,adminRoute,getAllPages);

router.post("/createPage",protectRoute,adminRoute,createPage);

export default router;