const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');

const path=require("path")
const PORT = process.env.PORT || 5000;

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.post(
  '/webhook/cashfree',                      // 1️⃣ the route (Cashfree will POST here)
  express.raw({ type: 'application/json' }), // 2️⃣ middleware to grab the raw body
  require('./webhooks/cashfreeWebhook')     // 3️⃣ your handler module
);

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);

app.use('/api/cart', cartRoutes);
app.use('/api/orders',orderRoutes);


app.use('/uploads',express.static(path.join(__dirname,'uploads')))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
