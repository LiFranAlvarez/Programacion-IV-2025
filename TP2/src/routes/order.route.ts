import { Router } from "express";
import { validarIdParams, validarOrderBody, validarStatusParams } from "../middleware/zod.middleware"; // Validacion con zod en middlewares
import orderController from "../controllers/order.controller";
const orderRoute = Router();

orderRoute.get('/orders', orderController.getOrderds);
orderRoute.get('/order/id/:idOrder', validarIdParams , orderController.getOrderdById);
orderRoute.get('/order/:idOrder/status', validarIdParams , orderController.getSatusOrderById);
orderRoute.get('/orders/status/:status', validarStatusParams , orderController.getOrderForStatus);
orderRoute.post('/order/add', validarOrderBody, orderController.addOrder);
orderRoute.post('/order/:idOrder/cancel', validarIdParams , orderController.cancelOrder);
orderRoute.post('/order/:idOrder/confirm', validarIdParams , orderController.confirmOrder);
orderRoute.post('/order/:idOrder/deliver', validarIdParams , orderController.deliveredOrder);
orderRoute.put('/order/:idOrder/address', validarIdParams , orderController.updateOrderAddress);
orderRoute.delete('/order/delete/:idOrder', validarIdParams , orderController.deleteOrder);

export default orderRoute;