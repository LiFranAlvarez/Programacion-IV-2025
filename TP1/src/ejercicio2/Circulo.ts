import { FiguraGeometrica } from "./FiguraGeometrica.js";

export class Circulo extends FiguraGeometrica {
    constructor(private radio: number) {
        super();
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }
}