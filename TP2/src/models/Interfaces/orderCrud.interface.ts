import { Order } from "../order";
import { Status } from "../order";

export interface CrudOrdens {
    // ---- GET ----
    getOrders(): Array<Order>; // GET /orders
    getOrderById(id:string): Order; // GET /orders/:id     ----------------------------------------  consigna
    getSatusOrderById(id:string): Status; // GET /orders/:id/status
    getOrderForStatus(estado:Status): Array<Order>; // GET /orders?status=pending  ----------------  consigna


    // ---- POST ----
    addOrder(nuevaOrden:Order): Order; // POST /orders          -----------------------------------  consigna
    cancelOrder(idOrder:string, motivoCancelar:string): Order; // POST /orders/:id/cancel ---------  consigna
    confirmOrder(idOrder:string): Order; // POST /orders/:id/confirm
    deliverOrder(idOrder:string): Order; // POST /orders/:id/deliver

    // ---- PUT/PATCH ----
    updateOrderAddress(id:string, addres:string): Order; // PUT /orders/:id/address

    // ---- DELETE ----
    deleteOrder(idOrder: string): void; // DELETE /orders/:id

    clear(): void;
}
