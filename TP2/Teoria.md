1. Ciclo Rojo → Verde → Refactor

El ciclo Rojo→Verde→Refactor es la práctica mínima de TDD: primero escribo un test que falla (rojo), luego implemento la mínima funcionalidad que hace pasar el test (verde) y finalmente mejoro el código sin romper tests (refactor). Mantener pasos pequeños (micro-commits) reduce riesgos, hace más claro el propósito de cada cambio y facilita revertir errores: cada test cubre una pequeña historia y el código evoluciona con garantía de regresión.

2. Diferencia entre tests unitarios, de integración y E2E en APIs

Los tests unitarios verifican funciones o clases aisladas (ej.: reglas de negocio del servicio de pedidos) usando dobles para dependencias. Los tests de integración comprueban la interacción entre módulos (por ejemplo: servicio + repositorio in-memory + validación), y los E2E (end-to-end) simulan flujos completos (cliente HTTP → servidor → DB real) para validar el comportamiento del sistema en conjunto. Cada tipo tiene su objetivo y coste: unitarios rápidos y precisos, integración más cercanos a la realidad, E2E costosos pero validados para flujos críticos.

3. ¿Qué es un doble de prueba? mock, stub, spy

Un doble de prueba sustituye una dependencia real en tests. Un stub devuelve datos preconfigurados (p. ej. repositorio in-memory con find/insert). Un mock además verifica interacciones esperadas (p. ej. que sendEmail() fue llamado con parámetros X). Un spy envuelve función real para observar llamadas sin sustituir comportamiento. Use stub para aislar lógica, mock para verificar efectos colaterales, spy para inspeccionar llamadas en tests unitarios.

4. Separar app de server (makeApp) — ejemplo

Separar app (Express app) del server facilita tests de integración porque no hacemos listen en tests; podemos usar supertest contra la app.

// src/app.ts
import express from 'express';
export function makeApp() {
  const app = express();
  app.use(express.json());
  app.post('/orders', (req, res) => res.status(201).json({ id: '1' }));
  return app;
}

// src/server.ts
import { makeApp } from './app';
const app = makeApp();
app.listen(3000, () => console.log('listening'));


En tests de integración se importa makeApp() y se usa supertest(makeApp()) sin abrir sockets permanentes.

5. Zod: parse vs safeParse

parse lanza excepción si la validación falla; safeParse devuelve { success: boolean, data | error }. En una ruta Express conviene usar safeParse para manejar errores controlados y devolver un 422 con detalles en el body, evitando excepciones no manejadas. parse puede ser útil en inicialización o scripts donde quieras fallar fast-fail.

6. Ejemplos de reglas de dominio a testear con unit tests

Cálculo de precio: el precio total debe sumar base según size más cada topping y aplicar descuentos si hubiera.

Cancelación: no permitir cancelar pedidos con status = delivered (debe lanzar error/response adecuado). Esas son reglas que no dependen de la validación de entrada y merecen tests unitarios.

7. Malos olores en suites de tests

Ejemplos: naming confuso (tests con nombres no descriptivos), duplicación de arrange/act/assert entre tests (sin helpers/builders), asserts débiles (verificar solo que no falle en lugar de validar salidas), mocks frágiles que condicionan demasiada implementación interna.

8. Trazabilidad criterios de aceptación ↔ tests (mini tabla)
ID CA	Descripción	Test asociado
CA1	Crear pedido con items no vacío y address ≥10	test: POST /orders → 201 y body contiene id, price
CA2	No cancelar pedido entregado	test: POST /orders/:id/cancel devuelve 409 si status=delivered
9. ¿Por qué no perseguir 100% de cobertura?

Buscar 100% puede llevar a tests frágiles que prueban detalles de implementación en lugar de comportamiento; incrementar cobertura con tests que no agregan valor (tests triviales o duplicados) crea coste de mantenimiento. Es mejor cobertura significativa en código crítico y tests con buen diseño.

10. Helper / builder para tests — definición y ejemplo

Un helper/builder es una función que crea objetos de prueba con valores por defecto que pueden sobrescribirse. Ej: buildOrder({ size = 'M', toppings = [] }) devuelve un objeto válido para usar en tests; reduce duplicación y facilita casos límite.