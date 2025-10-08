import { describe, it, expect, beforeEach } from 'vitest';
import { MockOrderCrud } from '../../models/mockOrderCrud';
import { CrudOrdens } from '../../models/Interfaces/orderCrud.interface';
import { Order } from "../../models/order";
import { ItemOrder } from "../../models/item";
import { Status } from '../../models/order';


const estadosPermitidos: Status[] = ['pending' , 'confirmed' , 'delivered' , 'cancelled']
const id:string = "ORD-001"
const crud:CrudOrdens = new MockOrderCrud();
const order1 = new Order(
    id, // idOrder
    [
    new ItemOrder("L", ["queso extra", "pepperoni"]), // items[0]
    new ItemOrder("M", ["jamón", "champiñones"])      // items[1]
    ],
    "Vieja Direccion", // address
    2500, // total
    undefined // cancelReason
);

describe('Peticiones Get CrudOrder', ()=>{
    beforeEach(()=>{
        crud.clear();
        crud.addOrder(order1);
    });
    it('getOrders() deberia devolver un array de ordenes', ()=>{
        const arrayOrders = crud.getOrders();
        expect(Array.isArray(arrayOrders)).toBe(true);
        expect(arrayOrders.length).toBe(1);
        expect(arrayOrders[0]).toHaveProperty('idOrder');
        expect(arrayOrders[0]).toHaveProperty('status');
    });
    it('getOrderById() deberia devolver una orden por su Id', ()=>{
        const orderByIdUno = crud.getOrderById(id);
        expect(orderByIdUno).toBeInstanceOf(Order);
    });
    it('getSatusOrderById() deberia devolver el estado de una orden', ()=>{
        const estado = crud.getSatusOrderById(id);
        expect(estadosPermitidos.includes(estado)).toBe(true)
    });
    it("getOrderForStatus() deberia devolver un Array de ordenes con el estado Pasado por parametro",()=>{
        const status = 'pending'
        const arrayEstado = crud.getOrderForStatus(status);
        expect(Array.isArray(arrayEstado)).toBe(true);
        expect(arrayEstado[0]).toHaveProperty('idOrder');
        expect(arrayEstado[0]).toHaveProperty('status');
    });
});

describe('Peticiones Post CrudOrder', ()=>{
    beforeEach(()=>{
        crud.clear();
    });
    it('addOrder(), espera que se agregue una orden a una lista', ()=>{
        const id2 = "ORD-002";
    const order2 = new Order(
        id2, // idOrder
        [
            new ItemOrder("S", ["rúcula", "tomates secos"]),   // items[0]
            new ItemOrder("L", ["mozzarella", "aceitunas"])   // items[1]
        ],
        "Calle Falsa 123", // address
        3200, // total
        undefined // cancelReason
    );
    expect(crud.addOrder(order2)).toBeInstanceOf(Order);
    });

    it('cancelOrder(), espera que una orden cambie de estado a cancelado',()=>{
        crud.addOrder(order1);
        const ordenACancelar = crud.getOrderById(id);
        crud.cancelOrder(id, "el comprador se arrepintio");
        expect(ordenACancelar.getStatus).toBe('cancelled');
        expect(typeof ordenACancelar.getCanselReason).toBe('string')
    });

    it('confirmOrder(), espera que una orden cambie de estado a confirmado',()=>{
        order1.setStatus = 'pending'
        crud.addOrder(order1);
        const ordenAConfirmar = crud.getOrderById(id);
        expect(ordenAConfirmar.getStatus).toBe('pending')
        const result = crud.confirmOrder(id);
        expect(result.getStatus).toBe('confirmed');
    });

    it('deliverOrder(), espera que una orden cambie de estado a deliver',async ()=>{
        order1.setStatus = 'confirmed';
        crud.addOrder(order1);
        const ordenADeliver = crud.getOrderById(id);
        crud.deliverOrder(id);
        expect(ordenADeliver.getStatus).toBe('delivered');
    });
});

describe('Peticiones Put CrudOrder', ()=>{
    beforeEach(()=>{
        crud.clear();
        crud.addOrder(order1);
    });
    it('updateOrderAddress(), deberia actualizar la direccion', ()=>{
        const nuevaDireccion:string = "Nueva direccion"
        crud.updateOrderAddress(id, nuevaDireccion);
        const OrdenActualizada = crud.getOrderById(id)
        expect(OrdenActualizada.getAddress).toBe(nuevaDireccion);
    });
})

describe('Peticiones Delete CrudOrder', ()=>{
    beforeEach(()=>{
        crud.clear();
        crud.addOrder(order1);
    });
    it('deleteOrder(), deberia remover una orden por id', ()=>{
        const order: Order = crud.getOrderById(id);
        crud.deleteOrder(id);
        const orders:Order[] = crud.getOrders();
        expect(orders).not.toContain(order);
    })
});

