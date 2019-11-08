const routes = require('express').Router();
const { User } = require('./app/models');

User.create({name: "Kairo", email: "kairo@gmail.com", password_hash: "6468468468486468"});

module.exports = routes;