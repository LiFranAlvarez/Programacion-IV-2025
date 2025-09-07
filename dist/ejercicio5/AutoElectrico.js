"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoElectrico = void 0;
const Auto_1 = require("./Auto");
class AutoElectrico extends Auto_1.Auto {
    constructor(marca, modelo, puertas, bateriaBaja) {
        super(marca, modelo, puertas);
        this.bateriaBaja = bateriaBaja;
    }
    acelerar() {
        if (this.bateriaBaja) {
            console.log(`El auto eléctrico ${this.marca} ${this.modelo} no puede acelerar porque la batería está baja.`);
        }
        else {
            console.log(`El auto eléctrico ${this.marca} ${this.modelo} acelera silenciosamente.`);
        }
    }
    cargarBateria() {
        console.log(`El auto eléctrico ${this.marca} ${this.modelo} está cargando la batería.`);
        this.bateriaBaja = false;
    }
}
exports.AutoElectrico = AutoElectrico;
//# sourceMappingURL=AutoElectrico.js.map