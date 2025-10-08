import request from 'supertest';
import { describe, it, expect, beforeEach } from 'vitest';
import Server from '../../app';
import { Order } from '../../models/order';
import { ItemOrder } from '../../models/item';
import orderService from '../../services/order.service';

const server = new Server(3000);
const app = server.app;

const id:string = "1";
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

// orderRoute.get('/orders', orderController.getOrderds);
// orderRoute.get('/order/id/:idOrder', orderController.getOrderdById);
// orderRoute.get('/order/:id/status', orderController.getSatusOrderById);
// orderRoute.get('/orders/status/:status', orderController.getOrderForStatus);
describe('integracion GET /practico2/orders', () => {
    it('deberia devolver un 200 y una array de orders', async () => {
    const res = await request(app).get('/practico2/orders');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true); // Asumiendo que devuelve un array
    });
    it('debria /order/id/:idOrder devolver un 200 y un objeto tipo Orden', async()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).get('/practico2/order/id/1');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('address');
    });
    it('/order/:id/status deberia devolver un status', async ()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).get('/practico2/order/1/status');
        expect(res.status).toBe(200);
        expect(res.body).toBe('pending');
    });
    it('/orders/status/:status deberia devolver un array de ordenes en tal estado', async ()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).get('/practico2/orders/status/pending');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
});

// orderRoute.post('/order/add', orderController.addOrder);
// orderRoute.post('/order/:idOrder/cancel', orderController.cancelOrder);
// orderRoute.post('/order/:idOrder/confirm', orderController.confirmOrder);
// orderRoute.post('/order/:idOrder/deliver', orderController.deliveredOrder);
describe('Integracion POST /practico2/orders', ()=>{
    beforeEach(()=>{
        orderService.clear()
    })
    it('/order/add deberia devolver un 201 y un objeto Order', async()=>{
        const res = await request(app).post('/practico2/order/add').send(order1);
        expect(res.status).toBe(201);
        expect(res.body).toHaveProperty('address');
    });
    it('/order/:idOrder/cancel deberia devolver un 200 y status = cancel', async ()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).post('/practico2/order/1/cancel').send({ cancelReason: 'el comprador se arrepintió' }).expect(200);
        expect(res.body).toHaveProperty('cancelReason', 'el comprador se arrepintió');
    });
    it('/order/:idOrder/confirm deberia devolver un 200 y status = confirmed', async ()=>{
        await request(app).post('/practico2/order/add').send(order1).expect(201);
        const res = await request(app).post('/practico2/order/1/confirm').expect(200);
        expect(res.body).toHaveProperty('status', 'confirmed')
    });
    it('/order/:idOrder/deliver deberia devolver un 200 y status = deliver', async ()=>{
        await request(app).post('/practico2/order/add').send(order1).expect(201);
        await request(app).post('/practico2/order/1/confirm').expect(200);
        const res = await request(app).post('/practico2/order/1/deliver').expect(200);
        expect(res.body).toHaveProperty('status', 'delivered')
        
    });
});

// orderRoute.put('/order/:idOrder/address', orderController.updateOrderAddress);
describe('Integracion PUT /practico2/order', ()=>{
    it('/order/:idOrder/address deberia devolver un 200 y una orden nueva', async ()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).put('/practico2/order/1/address').send({address : 'nuevaDire'});
        expect(res.status).toBe(200);   
        expect(res.body.address).equal('nuevaDire');
    });
});

// orderRoute.delete('/order/delete/:idOrder', orderController.deleteOrder);
describe('Integracion DELETE /practico2/order', ()=>{
    it('/order/delete/:idOrder deberia devolver un 200 y una orden nueva', async ()=>{
        await request(app).post('/practico2/order/add').send(order1);
        const res = await request(app).delete('/practico2/order/delete/1');
        expect(res.status).toBe(200);
        expect(res.body.message).equal('Eliminada')
    });
});


