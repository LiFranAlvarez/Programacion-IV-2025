import { http, HttpResponse } from 'msw';
import { Product as ProductType} from '../../interface/producto.interface';

export const productosMock: ProductType[] = [
    {
    id: '1',
    name: 'Café Americano',
    price: 350,
    },
    {
    id: '2',
    name: 'Medialuna',
    price: 280,
    },
    {
    id: '3',
    name: 'Jugo de Naranja',
    price: 500,
    },
    {
    id: '4',
    name: 'Tostado de Jamón y Queso',
    price: 750,
    },
];
const pedidoOrders : ProductType[][] = [];
export const handlers = [
    http.get('api/menu', () => {
    return HttpResponse.json(productosMock)
    }),http.post('api/orders', async ({ request }) => {
        const newOrder = (await request.json()) as ProductType[];
        pedidoOrders.push(newOrder);
        return HttpResponse.json(
            { message: 'Orden creada y añadida al mock list', orderId: `MOCK-${pedidoOrders.length}` },
            { status: 201 } 
        );
    }),
];
