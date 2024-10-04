class Empleados {
    constructor(id, nombre, misEmpleados = []) {
        (this.id = id), (this.nombre = nombre), (this.misEmpleados = misEmpleados);
    }

    agregarEmpleado(empleado) {
        this.misEmpleados.push(empleado);
    }

    imprimirEmpleados() {
        this.misEmpleados.forEach((element) => {
            console.log(element.nombre);
        });
    }
}

class Gerentes extends Empleados {
    constructor(id, nombre) {
        super(id, nombre);
    }

    coordinarProyectos() {
        console.log('esta coordinando los proyectos de la empresa');
    }
}

class GerentesProyectos extends Empleados {
    constructor(id, nombre, proyecto) {
        super(id, nombre);
        this.proyecto = proyecto;
    }

    coordinarSuProyecto() {
        console.log('esta coordinando su proyecto');
    }
}

class Programadores extends Empleados {
    constructor(id, nombre, lenguaje) {
        super(id, nombre);
        this.lenguaje = lenguaje;
    }

    programar() {
        console.log(`Esta programando en ${this.lenguaje}`);
    }

    agregarEmpleado() {
        console.log('Un programador no tiene empleados a su cargo');
    }
}

const myManager = new Gerentes(1, 'Eze');
const myProductManager1 = new GerentesProyectos(2, 'Matias', 'Proyecto 1');
const myProductManager2 = new GerentesProyectos(3, 'Guaymas', 'Proyecto 2');
const programmer1 = new Programadores(4, 'Fulanito1', 'javascript');
const programmer2 = new Programadores(5, 'Fulanito2', 'C++');
const programmer3 = new Programadores(6, 'Fulanito3', 'phyton');
const programmer4 = new Programadores(7, 'Fulanito4', 'Java');

myManager.agregarEmpleado(myProductManager1);
myManager.agregarEmpleado(myProductManager2);

myProductManager1.agregarEmpleado(programmer1);
myProductManager1.agregarEmpleado(programmer2);

myProductManager2.agregarEmpleado(programmer3);
myProductManager2.agregarEmpleado(programmer4);

programmer1.agregarEmpleado(programmer3);

myManager.imprimirEmpleados();
myProductManager1.imprimirEmpleados();
myProductManager2.imprimirEmpleados();
