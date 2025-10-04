"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangulo = void 0;
const FiguraGeometrica_js_1 = require("./FiguraGeometrica.js");
class Triangulo extends FiguraGeometrica_js_1.FiguraGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return (this.base * this.altura) / 2;
    }
}
exports.Triangulo = Triangulo;
//# sourceMappingURL=Triangulo.js.map