"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
const Animal_js_1 = require("./Animal.js");
class Pajaro extends Animal_js_1.Animal {
    constructor(nombre, especie) {
        super(nombre);
        this.especie = especie;
    }
    hacerSonido() {
        console.log(`${this.nombre} canta: Pío Pío`);
    }
    volar() {
        console.log(`${this.nombre} de la especie ${this.especie} está volando.`);
    }
}
exports.Pajaro = Pajaro;
//# sourceMappingURL=Pajaro.js.map