import {Vehiculo} from './Vehiculo.js';

export class Auto extends Vehiculo {
    private Puertas: number;

    constructor(marca: string, modelo: string, Puertas: number) {
        super(marca, modelo);
        this.Puertas = Puertas;
    }

    acelerar(): void {
        console.log(`El auto ${this.marca} ${this.modelo} acelera.`);
    }
}