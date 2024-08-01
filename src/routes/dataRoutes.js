const express = require('express');
const { getData } = require('../controllers/dataController');
const router = express.Router();

module.exports = function(data) {
  router.use((req, res, next) => {
    req.data = data; // Attach data to request object
    next();
  });

  router.get('/', getData);

  return router;
};
