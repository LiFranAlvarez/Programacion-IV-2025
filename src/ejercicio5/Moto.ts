import { Vehiculo } from "./Vehiculo";

export class Moto extends Vehiculo {
    private cilindrada: number;

    constructor(marca: string, modelo: string, cilindrada: number) {
        super(marca, modelo);
        this.cilindrada = cilindrada;
    }

    acelerar(): void {
        console.log(`La moto ${this.marca} ${this.modelo} acelera.`);
    }
}