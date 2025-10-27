import { http, HttpResponse } from 'msw';
import { Product } from '../../interface/producto.interface';

// --- TU MOCK ---
// Exportamos un array de productos que cumplen con el tipo Product
export const productosMock: Product[] = [
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
export const handlers = [
    http.get('api/menu', () => {
    return HttpResponse.json({...productosMock})
}),
];
// Enable API mocking anywhere.