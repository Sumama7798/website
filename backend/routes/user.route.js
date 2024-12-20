import express from "express";
import { getAllPages } from "../controllers/page.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/getAllPages", getAllPages);

export default router;