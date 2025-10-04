"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zorro = void 0;
const Animal_js_1 = require("./Animal.js");
class Zorro extends Animal_js_1.Animal {
    constructor(nombre, especie) {
        super(nombre);
    }
    hacerSonido() {
        console.log(`${this.nombre} hace: ¡Auuuuh!`);
    }
}
exports.Zorro = Zorro;
//# sourceMappingURL=Zorro.js.map