const {Router} = require("express");

const Correios = require("./Correios");

const routes = new Router();

routes.post('/shipping',Correios.calcShipping);

module.exports = routes;