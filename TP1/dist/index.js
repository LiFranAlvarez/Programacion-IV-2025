"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ejercicio 1
const Perro_js_1 = require("./ejercicio1/Perro.js");
const perro = new Perro_js_1.Perro();
perro.hacerSonido();
perro.moverse();
// Ejercicio 2
const Cuadrado_js_1 = require("./ejercicio2/Cuadrado.js");
const Circulo_js_1 = require("./ejercicio2/Circulo.js");
const Triangulo_js_1 = require("./ejercicio2/Triangulo.js");
const cuadrado = new Cuadrado_js_1.Cuadrado(4);
const circulo = new Circulo_js_1.Circulo(3);
const triangulo = new Triangulo_js_1.Triangulo(4, 5);
console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);
console.log(`Área del círculo: ${circulo.calcularArea()}`);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);
// Ejercicio 3
const EmpleadoTiempoCompleto_js_1 = require("./ejercicio3/EmpleadoTiempoCompleto.js");
const EmpleadoMedioTiempo_js_1 = require("./ejercicio3/EmpleadoMedioTiempo.js");
const empleados = [
    new EmpleadoTiempoCompleto_js_1.EmpleadoTiempoCompleto("Juan", 50000),
    new EmpleadoMedioTiempo_js_1.EmpleadoMedioTiempo("Ana", 40000),
    new EmpleadoTiempoCompleto_js_1.EmpleadoTiempoCompleto("Luis", 60000),
];
empleados.forEach(empleado => {
    console.log(`Salario de ${empleado.nombre}: ${empleado.calcularSalario()}`);
});
// Ejercicio 4
const Pajaro_js_1 = require("./ejercicio4/Pajaro.js");
const Zorro_js_1 = require("./ejercicio4/Zorro.js");
const pajaro = new Pajaro_js_1.Pajaro("Piolin", "Canario");
pajaro.hacerSonido();
pajaro.volar();
const zorro = new Zorro_js_1.Zorro("Zorrito", "Zorro Gris");
zorro.hacerSonido();
// Ejercicio 5
const Auto_js_1 = require("./ejercicio5/Auto.js");
const Moto_js_1 = require("./ejercicio5/Moto.js");
const AutoElectrico_js_1 = require("./ejercicio5/AutoElectrico.js");
const auto = new Auto_js_1.Auto("Toyota", "Corolla", 4);
auto.acelerar();
const moto = new Moto_js_1.Moto("Yamaha", "R3", 321);
moto.acelerar();
const autoElectrico = new AutoElectrico_js_1.AutoElectrico("Tesla", "Model 3", 4, true);
autoElectrico.acelerar();
autoElectrico.cargarBateria();
autoElectrico.acelerar();
//# sourceMappingURL=index.js.map