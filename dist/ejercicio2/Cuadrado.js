"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cuadrado = void 0;
const FiguraGeometrica_js_1 = require("./FiguraGeometrica.js");
class Cuadrado extends FiguraGeometrica_js_1.FiguraGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}
exports.Cuadrado = Cuadrado;
//# sourceMappingURL=Cuadrado.js.map