import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import setupSwagger from './utils/swagger.js';

import authRoutes from './routes/authRoutes.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config();

const app = express();
setupSwagger(app);

// Use specific origin for security
const allowedOrigins = [
  'https://product-manager-5i0xk5sz0-priyanshsolankis-projects.vercel.app',
  'http://localhost:5173' // dev
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
}));

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);


// DB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error("MongoDB Error:", err));

const PORT = process.env.PORT || 5080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
