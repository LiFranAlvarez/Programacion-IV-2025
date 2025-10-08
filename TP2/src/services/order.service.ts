import { CrudOrdens } from "../models/Interfaces/orderCrud.interface";
import { Order, Status } from "../models/order";
import ModelOrder from '../models/mockOrderCrud'

export class OrderService implements CrudOrdens{
    getOrders(): Array<Order> {
        return ModelOrder.getOrders();
    };
    getOrderById(id: string): Order {
        return ModelOrder.getOrderById(id);
    };
    getSatusOrderById(id: string): Status {
        return ModelOrder.getSatusOrderById(id)
    };
    getOrderForStatus(estado: Status): Array<Order> {
        return ModelOrder.getOrderForStatus(estado);
    };
    addOrder(nuevaOrden: Order): Order {
        return ModelOrder.addOrder(nuevaOrden);
    };
    cancelOrder(idOrder: string, motivoCancelar: string): Order {
        return ModelOrder.cancelOrder(idOrder, motivoCancelar);
    };
    confirmOrder(idOrder: string): Order {
        return ModelOrder.confirmOrder(idOrder);
    };
    deliverOrder(idOrder: string): Order {
        return ModelOrder.deliverOrder(idOrder);
    };
    updateOrderAddress(id: string, addres: string): Order {
        return ModelOrder.updateOrderAddress(id, addres);
    };
    deleteOrder(idOrder: string): void {
        ModelOrder.deleteOrder(idOrder);
    };
    validarStatus(status:string):boolean{
        if (status !== 'pending' && status !== 'confirmed' && status !== 'delivered' && status !=='cancelled'){
            return false;
        }
        return true;
    };
    clear(): void {
        ModelOrder.clear();
    };
};
export default new OrderService();