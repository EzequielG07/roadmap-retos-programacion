const webNavigation = () => {
    let pila = [];

    while (true) {
        action = prompt(`Escriba la url o interactue con las siguientes paralabras
      para navegar, adelante/atras/salir`);

        if (action === 'salir') {
            console.log('Salio del programa');
            break;
        } else if (action === 'adelante') {
        } else if (action === 'atras') {
            if (pila.length > 0) {
                pila.pop();
                console.log(`Has navegado a la web: ${pila[pila.length - 1]}.`);
            } else {
                console.log('No hay elementos');
            }
        } else {
            pila.push(action);
            pila.length > 0
                ? console.log(`Has navegado a la web: ${pila[pila.length - 1]}.`)
                : console.log('Estas en la Pag. Inicio');
        }
    }
};

// webNavigation();

const printer = () => {
    cola = [];

    while (true) {
        action = prompt('Añade documento o selecciona imprimir/salir');
        if (action === 'salir') {
            console.log('Salio del programa');
            break;
        } else if (action === 'imprimir') {
            cola.length > 0 ? console.log(`Imprimiendo: ${cola.pop(0)}`) : console.log('Cola de impresion vacia');
        } else {
            cola.push(action);
            console.log('Cola de impresion:', cola);
        }
    }
};

// printer();
