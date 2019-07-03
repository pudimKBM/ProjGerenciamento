const express = require('express');
const routes = express.Router();

const OrderController = require('./controllers/OredersController');

routes.get("/orders", OrderController.index);
routes.get("/orders/:id", OrderController.search);
routes.post("/orders", OrderController.store);
routes.put("/orders/:id", OrderController.update);
routes.delete("/orders/:id", OrderController.delete);


module.exports=routes;