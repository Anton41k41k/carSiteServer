import { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

export const router = Router();

router.get('/users', async (req, res) => {
  console.log('endponit work /users');
});
