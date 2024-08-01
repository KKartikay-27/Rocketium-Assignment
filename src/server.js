const express = require('express');
const initializeData = require('./initialize');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 3000;

// Initialize data
const data = initializeData();

// Middleware
app.use(express.json());

// Routes
app.use('/api/data', dataRoutes(data));

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global Error:', err);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
