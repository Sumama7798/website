import express from "express";
import {  adminRoute, protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id", protectRoute , adminRoute , getMessages);
router.post("/send/:id", protectRoute , sendMessage);

export default router;