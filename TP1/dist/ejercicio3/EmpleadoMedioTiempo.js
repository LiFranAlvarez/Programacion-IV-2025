"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleadoMedioTiempo = void 0;
const Empleado_js_1 = require("./Empleado.js");
class EmpleadoMedioTiempo extends Empleado_js_1.Empleado {
    calcularSalario() {
        return this.salarioBase * 0.5;
    }
}
exports.EmpleadoMedioTiempo = EmpleadoMedioTiempo;
//# sourceMappingURL=EmpleadoMedioTiempo.js.map