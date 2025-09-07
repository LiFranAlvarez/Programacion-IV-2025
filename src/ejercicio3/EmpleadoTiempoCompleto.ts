import {Empleado} from "./Empleado.js";

export class EmpleadoTiempoCompleto extends Empleado {
    private bono:number = 20000;

    calcularSalario(): number {
        return this.salarioBase + this.bono;
    }
        
}
