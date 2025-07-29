const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const allowedOrigins=["http://localhost:5173"]
const app = express();
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.get('/', (req, res) => res.send("API is Working!"));
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
