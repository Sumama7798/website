import express from 'express'

import { Upload } from '../controllers/upload.controller.js';
import { getUserProfile } from '../controllers/profile.controller.js';
import { createCard, getAllCards } from '../controllers/card.controller.js';
import { protectRoute, adminRoute } from '../middleware/auth.middleware.js';


const router = express.Router()

router.post("/upload",protectRoute,adminRoute,Upload);


router.get("/profile",protectRoute,adminRoute,getUserProfile);


router.post("/createCard",protectRoute,adminRoute,createCard);

router.get("/getAllCards",protectRoute,adminRoute, getAllCards);

export default router;