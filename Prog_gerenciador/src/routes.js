const express = require('express');
const routes = express.Router();

const OrderController = require('./controllers/OredersController');
const CatalogadorController = require('./controllers/CatalogadorController');
const UserController = require('./controllers/UserController');

routes.get("/orders", OrderController.index);
routes.get("/orders/:id", OrderController.search);
routes.post("/orders", OrderController.store);
routes.put("/orders/:id", OrderController.update);
routes.delete("/orders/:id", OrderController.delete);
routes.post("/catalogador", CatalogadorController.create);
routes.post("/user", UserController.create);
routes.put("/catalogador/:id", CatalogadorController.addColor);
routes.get("/catalogador/:id", CatalogadorController.getData);

module.exports=routes;