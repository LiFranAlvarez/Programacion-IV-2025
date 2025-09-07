"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
const Vehiculo_js_1 = require("./Vehiculo.js");
class Auto extends Vehiculo_js_1.Vehiculo {
    constructor(marca, modelo, Puertas) {
        super(marca, modelo);
        this.Puertas = Puertas;
    }
    acelerar() {
        console.log(`El auto ${this.marca} ${this.modelo} acelera.`);
    }
}
exports.Auto = Auto;
//# sourceMappingURL=Auto.js.map