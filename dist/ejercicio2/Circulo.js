"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circulo = void 0;
const FiguraGeometrica_js_1 = require("./FiguraGeometrica.js");
class Circulo extends FiguraGeometrica_js_1.FiguraGeometrica {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
}
exports.Circulo = Circulo;
//# sourceMappingURL=Circulo.js.map