const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); 
const authRoutes = require('./routes/auth'); 
const propertyRoutes = require('./routes/property'); 

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);       
app.use('/api/properties', propertyRoutes); 

// Test route
app.get('/', (req, res) => res.send('PropSpace API running...'));

// Connect to MongoDB
connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
