const express = require('express');
const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('./utils');
const expressionsRouter = express.Router();

// Data
const expressions = [];
seedElements(expressions, 'expressions');

// Get all /expressions
expressionsRouter.get('/', (req, res, next) => {
  res.send(expressions);
});
 
module.exports = expressionsRouter;