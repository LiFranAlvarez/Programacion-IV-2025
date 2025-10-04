import {Animal} from './Animal.js';
import {Volador} from './Volador.js';

export class Pajaro extends Animal  implements Volador {
    private especie: string;

    constructor(nombre: string, especie: string){
        super(nombre);
        this.especie = especie;
    }
    hacerSonido(): void {
        console.log(`${this.nombre} canta: Pío Pío`);
    }

    volar(): void {
        console.log(`${this.nombre} de la especie ${this.especie} está volando.`);
    }


}