import express from 'express';
import * as signupController from '../controllers/signupController.js';
import * as verifyController from '../controllers/verifyController.js';

const router = express.Router();

router.post('/signup', signupController.signup_post);
router.get('/verify/:uniqueString', verifyController.verify_get);
router.post('/login', );

export default router;
