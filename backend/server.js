const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');
const allowedOrigins = ["http://localhost:5173","https://ajith-foods-app.vercel.app"]; // Ensure full origin including https

const app = express();
app.use(cors({ origin: allowedOrigins, credentials: true }));
app.use(express.json());

// Health Check Route
app.get('/', (req, res) => res.send("API is Working!"));

// 🔹 JSONBin Proxy Route
app.get('/api/data', async (req, res) => {
  try {
    const response = await axios.get('https://api.jsonbin.io/v3/b/6888ca6f7b4b8670d8a9338a', {
      headers: {
        'X-Master-Key': process.env.JSONBIN_API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Fetch error:', error.message);
    res.status(500).json({ error: 'Could not fetch from JSONBin' });
  }
});

// MongoDB Routes (if you need auth too)
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
