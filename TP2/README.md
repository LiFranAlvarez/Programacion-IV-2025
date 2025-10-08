# Plantilla de Express con TypeScript

## API de Órdenes de Pizza

# Programación 4 - Trabajo Práctico N°2

Mini proyecto de pedidos para una **Pizzería** desarrollado con **Node.js**, **Express** y **TypeScript**. Este proyecto permite crear, consultar, actualizar y eliminar pedidos de manera sencilla usando una API REST.

---

## Tecnologías y Librerías

- **Lenguaje:** TypeScript  
- **Framework:** Node.js + Express  
- **Validaciones:** Zod  
- **Testing:** Vitest  
- **Otras librerías:** cors, morgan  

---

## Requisitos

- Node.js (recomendado >= 20.x)  
- npm (recomendado >= 9.x)  

No se requieren bases de datos externas, todo funciona **in-memory**.

---

## Instalación

1. Clonar el repositorio:


git clone <URL_DEL_REPOSITORIO>
cd <NOMBRE_DEL_PROYECTO>

2. Instalar Dependencias:
```bash

npm install
```

3. Iniciar servidor en desarrollo (con watch):
```bash
npm run dev
```

4. Compilar TypeScript (con watch):
```bash
npm run build
```

5. Ejecutar tests:
```bash
npm test
```

6. Ejecutar tests con cobertura:
```bash
npm run test:coverage
```


## Ejemplos de uso 

Base URL
http://localhost:3000/practico2

Agregar un pedido:
```bash
curl -X POST http://localhost:3000/practico2/order/add 
-H "Content-Type: application/json" 
-d '{
    "idOrder": "1",
    "items": [
        { "size": "S", "topping": ["queso", "jamón"] },
        { "size": "M", "topping": ["pepperoni", "extra queso"] }
    ],
    "address": "Av. Siempre Viva 742",
    "total": 2500
}'
```


Listar todos los pedidos:
```bash
curl -X GET http://localhost:3000/practico2/orders
```

Obtener pedido por ID:
```bash
curl -X GET http://localhost:3000/practico2/order/id/1
```
Ver estado de un pedido:
```bash
curl -X GET http://localhost:3000/practico2/order/1/status
```
Listar pedidos por estado (ej. pending):
```bash
curl -X GET http://localhost:3000/practico2/orders/status/pending
```
Cancelar un pedido:
```bash
curl -X POST http://localhost:3000/practico2/order/1/cancel 
-H "Content-Type: application/json" 
-d '{
  "cancelReason": "Cliente cambió de opinión"
}'
```
Confirmar un pedido:
```bash
curl -X POST http://localhost:3000/practico2/order/1/confirm
```
Entregar un pedido:

```bash
curl -X POST http://localhost:3000/practico2/order/1/deliver
```
Actualizar dirección de un pedido:
```bash
curl -X PUT http://localhost:3000/practico2/order/1/address 
-H "Content-Type: application/json" 
-d '{
  "address": "direccion Nueva"
}'
```
Eliminar un pedido:
```bash
curl -X DELETE http://localhost:3000/practico2/order/delete/1
```
## Matriz de casos
![alt text](matriz-de-casos.jpeg)