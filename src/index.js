// src/server.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const dataRoutes = require('./routes/dataRoutes');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Load initial data
const initializeData = () => {
  try {
    const rawData = fs.readFileSync(path.join(__dirname, '../data/dummyData.json'));
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error loading data:', error);
    return [];
  }
};

// Attach data to request
app.use((req, res, next) => {
  req.data = initializeData();
  next();
});

// Use routes
app.use('/api', dataRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
