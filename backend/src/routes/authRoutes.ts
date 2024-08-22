import express from 'express';
import { signup, verifyOtp, login,getUserDetails } from '../controllers/authController';
import {authMiddleware} from "../middlewares/authMiddleware";

const router = express.Router();

router.post('/signup', signup);
router.post('/verify-otp', verifyOtp);
router.post('/login', login);
router.get('/user-details',authMiddleware, getUserDetails);

export default router;
