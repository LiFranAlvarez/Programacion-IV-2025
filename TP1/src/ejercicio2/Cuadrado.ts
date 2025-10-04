import {FiguraGeometrica} from "./FiguraGeometrica.js";

export class Cuadrado extends FiguraGeometrica {
    constructor(private lado: number) {
        super();
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }
}
