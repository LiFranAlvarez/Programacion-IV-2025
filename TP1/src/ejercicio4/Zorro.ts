import {Animal} from './Animal.js';

export class Zorro extends Animal {
    constructor(nombre: string, especie: string){
        super(nombre);

}
    hacerSonido(): void {
        console.log(`${this.nombre} hace: ¡Auuuuh!`);
    }
}