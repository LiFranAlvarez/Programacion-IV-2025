import { Auto } from "./Auto";
import { Electrico } from "./Electrico";

export class AutoElectrico extends Auto implements Electrico {
    private bateriaBaja: boolean;

    constructor(marca: string, modelo: string, puertas: number, bateriaBaja: boolean) {
        super(marca, modelo, puertas);
        this.bateriaBaja = bateriaBaja;
    }

    acelerar(): void {
        if (this.bateriaBaja) {
            console.log(`El auto eléctrico ${this.marca} ${this.modelo} no puede acelerar porque la batería está baja.`);
    } else {
            console.log(`El auto eléctrico ${this.marca} ${this.modelo} acelera silenciosamente.`);
    
    }
}

    cargarBateria(): void {
    console.log(`El auto eléctrico ${this.marca} ${this.modelo} está cargando la batería.`);
    this.bateriaBaja = false;
    }
}

