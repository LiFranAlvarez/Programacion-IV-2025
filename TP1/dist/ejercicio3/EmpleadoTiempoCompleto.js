"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoTiempoCompleto = void 0;
const Empleado_js_1 = require("./Empleado.js");
class EmpleadoTiempoCompleto extends Empleado_js_1.Empleado {
    constructor() {
        super(...arguments);
        this.bono = 20000;
    }
    calcularSalario() {
        return this.salarioBase + this.bono;
    }
}
exports.EmpleadoTiempoCompleto = EmpleadoTiempoCompleto;
//# sourceMappingURL=EmpleadoTiempoCompleto.js.map