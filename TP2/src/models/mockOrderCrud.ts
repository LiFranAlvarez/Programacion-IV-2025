import { CrudOrdens } from "./Interfaces/orderCrud.interface";
import { HttpError } from "../common/httpError";
import { Order, Status } from "./order";
export class MockOrderCrud implements CrudOrdens{
    protected tamaño:number = 0;
    protected orders:Order[] = [];
// ---- GET ----
    getOrders(): Array<Order> {
        return this.orders;
    };
    getOrderById(id:string): Order {
        const result = this.orders.find((orden)=>{
            return orden.getIdOrder === id;
        });
        if (!result) {
            throw new HttpError(404 , "No existe orden con ese ID");
        }
        return result;
    };
    getSatusOrderById(id:string): Status {
        const result = this.getOrderById(id);
        return result.getStatus;
    };
    getOrderForStatus(estado:Status): Array<Order> {
        const result:Array<Order> = [];
        this.orders.forEach(orden => {
            if (orden.getStatus === estado) {
                result.push(orden);
            };
        });
        return result;
    };
// ---- POST ----
    addOrder(newOrder:Order): Order {
        const itemsNewOrder = newOrder.getItems;
        if (itemsNewOrder.length === 0 ) {
            throw new HttpError( 422 , "Error en la cantidad de items asignados");
            };
        this.orders.push(newOrder);
        return newOrder;
    };
    cancelOrder(idOrder:string, motivoCancelar:string): Order {
        const orderModify = this.getOrderById(idOrder);
        if (orderModify.getStatus === 'delivered') {
            throw new HttpError( 409 ,"Pedido Entregado");
        }
        orderModify.setStatus = 'cancelled';
        orderModify.setCancelReason = motivoCancelar;
        return orderModify;
    }
    confirmOrder(idOrder:string): Order {
        const orderModify = this.getOrderById(idOrder);
        console.log(orderModify instanceof Order); // devuelve True
        console.log(orderModify.getStatus); // devuelve pending
        if (orderModify.getStatus !== 'pending') {
            throw new HttpError(409, `Error, la orden esta ${orderModify.getStatus}`);
        }
        orderModify.setStatus = 'confirmed';
        return orderModify;
    };
    deliverOrder(idOrder:string): Order {
        const orderModify = this.getOrderById(idOrder);
        console.log(orderModify instanceof Order);
        console.log(orderModify.getStatus);
        if (orderModify.getStatus !== 'confirmed') {
            throw new HttpError(409, `Error, la orden esta ${orderModify.getStatus}`);
        }
        orderModify.setStatus = 'delivered';
        return orderModify;
    }
// ---- PUT/PATCH ----
    updateOrderAddress( id:string,addres:string): Order {
        const orderModify = this.getOrderById(id);
        orderModify.setAddres = addres;
        return orderModify;
    }
// ---- DELETE ----
    deleteOrder(idOrder: string): void {
        const orderDelete = this.getOrderById(idOrder);
        const index = this.orders.indexOf(orderDelete);
        this.orders.splice(index, 1);
    }
// ---- ----

    clear(): void {
        // Limpia el array de ordenes para los Unitest.
        this.orders = [];
    }
}
export default new MockOrderCrud();