// src/routes/dataRoutes.js

const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const data = require('../../data/dummyData.json'); // Adjust the path as needed

// Set data for the request object
router.use((req, res, next) => {
  req.data = data;
  next();
});

// Route to get all data
router.get('/data', (req, res) => {
  dataController.getData(req, res);
});

// Route to filter and sort data
router.get('/data/filter', (req, res) => {
  dataController.getData(req, res);
});

module.exports = router;
