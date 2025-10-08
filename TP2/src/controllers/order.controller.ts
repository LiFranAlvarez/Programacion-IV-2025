import { Request, Response } from "express";
import  OrderService  from "../services/order.service";
import { Order, Status } from "../models/order";
import { ItemOrder } from "../models/item";
import orderService from "../services/order.service";
import { HttpError } from "../common/httpError";

class OrderController {
    
    public getOrderds( req: Request, res: Response ){
        // ruta.get /orders
        try {
            const respuesta = OrderService.getOrders();
            res.status(200).json(respuesta);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({message: error.message});
            }
        }
    };
    public getOrderdById( req: Request, res: Response ){
        // ruta.get /order/:id
        try {
            const idOrder = req.params.idOrder
            const resultado = OrderService.getOrderById(idOrder);
            res.status(200).json(resultado);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            }
        }
    };
    public getSatusOrderById( req: Request, res: Response ){
        // ruta.get /order/:id/status
        try {
            const idOrder = req.params.idOrder;
            const resultado = OrderService.getSatusOrderById(idOrder);
            res.status(200).json(resultado);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };;
        }
    };
    public getOrderForStatus( req: Request, res: Response ){
        // GET /orders/status/:status
        try {
            const status = req.params.status;
            const resultado = OrderService.getOrderForStatus(status as Status);
            res.status(200).json(resultado);
        } catch (error) {
            if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public addOrder( req: Request, res: Response ){
        // ruta.post /order/add
        try {
            const {idOrder, items, address, total} = req.body;
            const nuevaOrden = OrderService.addOrder(new Order(idOrder, items as unknown as ItemOrder[], address, total));
            res.status(201).json(nuevaOrden);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public cancelOrder( req: Request, res: Response ){
        //POST /orders/:id/cancel
        try {
            const idOrder = req.params.idOrder
            const { cancelReason } = req.body;
            console.log(`Se esta Cancelando la orden ID: ${idOrder} Razon: ${cancelReason}`);
            const ordenCancelada : Order = OrderService.cancelOrder(idOrder, cancelReason);
            res.status(200).json(ordenCancelada);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public confirmOrder( req: Request, res: Response ){
        // POST /orders/:id/confirm
        try {
            const idOrder = req.params.idOrder
            console.log(`Se esta confirmando la orden ID: ${idOrder}`);
            const ordenConfirmada : Order = OrderService.confirmOrder(idOrder);
            res.status(200).json(ordenConfirmada);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public deliveredOrder( req: Request, res: Response ){
        // POST /orders/:id/deliver
        try {
            const idOrder = req.params.idOrder
            console.log(`Se esta Deliver la orden ID: ${idOrder}`);
            const ordenDeliver : Order = OrderService.deliverOrder(idOrder);
            if (!ordenDeliver) {
                    throw new Error("No se pudo entregar la nueva orden");
                }
            res.status(200).json(ordenDeliver);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public updateOrderAddress( req: Request, res: Response ){
        // PUT /orders/:id/address
        try {
            const idOrder = req.params.idOrder
            const {address} = req.body;
            console.log(address);
            console.log(idOrder);
            const ordenModificada: Order = OrderService.updateOrderAddress(idOrder, address);
            res.status(200).json(ordenModificada);
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
    public deleteOrder( req: Request, res: Response ){
        ///DELETE /orders/:id
        try {
            const idOrder = req.params.idOrder;
            const ordenEliminar:Order = orderService.getOrderById(idOrder);
            if (!ordenEliminar) {
                throw new Error("No se encontro orden para eliminar");
            }
            orderService.deleteOrder(idOrder);
            res.status(200).json({ordenEliminar, message: 'Eliminada' });
        } catch (error) {
            if (error instanceof HttpError) {
                res.status(error.codigo).json({message: error.message});
            } else if (error instanceof Error) {
                res.status(404).json({message: error.message});
            };
        }
    };
};

export default new OrderController();
