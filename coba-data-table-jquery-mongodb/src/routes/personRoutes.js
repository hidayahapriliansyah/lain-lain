import express from 'express';
import * as personController from '../controllers/personController.js';

const router = express.Router();

// controller person
router.get('/', personController.person_get);

export default router;
