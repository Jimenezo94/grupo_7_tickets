const express = require('express');
const editProductRouter = express.Router();
const editProductController = require('../controllers/editProductController');


editProductRouter.get('/admin', editProductController.admin);

module.exports = editProductRouter;