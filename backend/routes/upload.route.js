import express from 'express'
import { Upload } from '../controllers/upload.controller.js';


const router = express.Router()

router.post("/upload",Upload)

export default router;