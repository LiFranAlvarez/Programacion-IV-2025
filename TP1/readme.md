

##  Integrantes
- Angelina Rossi
- Lisandro Alvarez
- Ana Paula Schechtel
- Mateo Belatti

##  Estructura
src/
── ejercicio1/ # Interfaces (Animal, Perro)
── ejercicio2/ # Clases abstractas (FiguraGeometrica, Cuadrado, Círculo, Triángulo)
── ejercicio3/ # Herencia y Polimorfismo (Empleado, EmpleadoTiempoCompleto, EmpleadoMedioTiempo)
── ejercicio4/ # UML Animal, Pájaro, Zorro, Volador
── ejercicio5/ # UML Vehículos, Auto, Moto, AutoElectrico, Electrico


## Diagramas UML

## Ejercicio 3 - Empleado

```mermaid
classDiagram
    class Empleado {
        <<abstract>>
        # nombre: string
        # salarioBase: number
        + calcularSalario(): number
    }

    class EmpleadoTiempoCompleto {
        - bonoFijo: number
        + calcularSalario(): number
    }

    class EmpleadoMedioTiempo {
        + calcularSalario(): number
    }

    Empleado <|-- EmpleadoTiempoCompleto
    Empleado <|-- EmpleadoMedioTiempo
```

##  Ejercicio 5 - Vehículos

```mermaid
classDiagram
    class Vehiculo {
        <<abstract>>
        # marca: string
        # modelo: string
        + acelerar(): void
    }

    class Auto {
        - puertas: number
        + acelerar(): void
    }

    class Moto {
        - cilindrada: number
        + acelerar(): void
    }

    class Electrico {
        <<interface>>
        + cargarBateria(): void
    }

    class AutoElectrico {
        - bateriaBaja: boolean
        + acelerar(): void
        + cargarBateria(): void
    }

    Vehiculo <|-- Auto
    Vehiculo <|-- Moto
    Auto <|-- AutoElectrico
    AutoElectrico ..|> Electrico
```
