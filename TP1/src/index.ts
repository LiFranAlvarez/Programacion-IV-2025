// Ejercicio 1
import {Perro} from "./ejercicio1/Perro.js";
const perro = new Perro();
perro.hacerSonido();
perro.moverse();


// Ejercicio 2
import {Cuadrado} from "./ejercicio2/Cuadrado.js";
import {Circulo} from "./ejercicio2/Circulo.js";
import {Triangulo} from "./ejercicio2/Triangulo.js";

const cuadrado = new Cuadrado(4);
const circulo = new Circulo(3);
const triangulo = new Triangulo(4, 5);

console.log(`Área del cuadrado: ${cuadrado.calcularArea()}`);
console.log(`Área del círculo: ${circulo.calcularArea()}`);
console.log(`Área del triángulo: ${triangulo.calcularArea()}`);


// Ejercicio 3
import {EmpleadoTiempoCompleto} from "./ejercicio3/EmpleadoTiempoCompleto.js";
import {EmpleadoMedioTiempo} from "./ejercicio3/EmpleadoMedioTiempo.js";
import { Empleado } from "./ejercicio3/Empleado.js";

const empleados: Empleado[] = [
    new EmpleadoTiempoCompleto("Juan", 50000),
    new EmpleadoMedioTiempo("Ana", 40000),
    new EmpleadoTiempoCompleto("Luis", 60000),
];

empleados.forEach(empleado => {
    console.log(`Salario de ${empleado.nombre}: ${empleado.calcularSalario()}`);
});


// Ejercicio 4
import {Pajaro} from "./ejercicio4/Pajaro.js";
import {Zorro} from "./ejercicio4/Zorro.js";

const pajaro = new Pajaro("Piolin", "Canario");
pajaro.hacerSonido();
pajaro.volar();

const zorro = new Zorro("Zorrito", "Zorro Gris");
zorro.hacerSonido();



// Ejercicio 5
import {Auto} from "./ejercicio5/Auto.js";
import {Moto} from "./ejercicio5/Moto.js";
import {AutoElectrico} from "./ejercicio5/AutoElectrico.js";

const auto = new Auto("Toyota", "Corolla", 4);
auto.acelerar();

const moto = new Moto("Yamaha", "R3", 321);
moto.acelerar();

const autoElectrico = new AutoElectrico("Tesla", "Model 3", 4, true);
autoElectrico.acelerar();
autoElectrico.cargarBateria();
autoElectrico.acelerar();
