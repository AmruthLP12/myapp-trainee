// routes.js

const express = require('express');
const checkedController = require('../Controller/checkedController.js');

const router = express.Router();

// Define routes
router.post('/api/checked', checkedController.saveCheckedData);

router.get('/api/checked', checkedController.fetchCheckedData);

module.exports = router;
