import express from 'express';
import cors from 'cors';
import { connectDb } from './config/database.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRoute from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT;

// middleware
app.use(express.json())
app.use(cors({
  origin: 'https://eco-food-p18s.vercel.app',
  credentials: true
}));

connectDb();