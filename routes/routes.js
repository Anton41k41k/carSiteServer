import { Router } from 'express';
import dotenv from 'dotenv';
import Feedback from '../db/models/Feedback.js';

dotenv.config();
export const router = Router();
router.post('/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  feedback.save();
  console.log('Сервер ответил');
  // console.log();
});
