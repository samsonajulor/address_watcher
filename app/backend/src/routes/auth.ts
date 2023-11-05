import { Router } from 'express';
import { onboardUser, createUser, getOTP, logIn } from '../controller/user';
import { UserMiddleware } from '../middleware';

const { inspectUserOnboarding, inspectCreateUser } = UserMiddleware;

const router = Router();

router.post('/onboard/:token', [inspectCreateUser], createUser);
router.post('/onboard', [inspectUserOnboarding], onboardUser);
router.post('/login', [inspectUserOnboarding], logIn);
router.post('/otp', [inspectUserOnboarding], getOTP);

export default router;
