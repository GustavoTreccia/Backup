import express from 'express';
import PedidoController from './Controllers/PedidoController.ts';
import ReservaController from './Controllers/ReservaController.ts';
import ConnectionController from './Controllers/ConnectionController.ts';

const routes = express.Router();
const ReservaController = new ReservaController();
const PedidoController = new PedidoController();
const ConnectionController = new ConnectionController;



export default routes;

