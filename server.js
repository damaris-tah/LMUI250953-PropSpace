const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // import db connection

const app = express();
app.use(express.json());
app.use(cors());

// Test route
app.get('/', (req, res) => res.send('PropSpace API running...'));

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
