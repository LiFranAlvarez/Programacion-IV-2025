import {Empleado} from "./Empleado.js";

export class EmpleadoMedioTiempo extends Empleado {
    calcularSalario(): number {
        return this.salarioBase * 0.5;
    }
}

