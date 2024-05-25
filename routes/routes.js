import { Router } from 'express';
import dotenv from 'dotenv';
import Feedback from '../db/models/Feedback.js';
import Order from '../db/models/Order.js';

dotenv.config();
export const router = Router();
router.post('/feedback', async (req, res) => {
  const feedback = new Feedback(req.body);
  feedback.save();
  console.log('Сервер отправил feedback');
});
router.post('/order', async (req, res) => {
  const order = new Order(req.body);
  order.save();
  console.log('Сервер отправил order');
});
