export abstract class Empleado {
    constructor(protected nombre: string, protected salarioBase: number) {}
    abstract calcularSalario(): number;
}


