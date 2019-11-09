const routes = require('express').Router();

const SesssionController = require('./app/controllers/SessionController');

routes.post('/sessions', SesssionController.store);

module.exports = routes;
