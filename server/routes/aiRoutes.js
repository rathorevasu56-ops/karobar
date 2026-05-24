import express from 'express';
import { protect } from '../middleware/authMiddleware.js';
import OpenAI from 'openai';
const router = express.Router();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

router.post('/chat', protect, async (req, res) => {
  const { message } = req.body;
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: 'You are a fashion shopping assistant. Help users find products.' }, { role: 'user', content: message }],
  });
  res.json({ reply: completion.choices[0].message.content });
});

export default router;