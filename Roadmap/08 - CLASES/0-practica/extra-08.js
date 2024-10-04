class Stack {
    constructor(data) {
        this.data = data;
    }

    addElement(item) {
        this.data.push(item);
    }

    deleteElement() {
        this.countElement() === 0 ? console.log('Pila vacia') : this.data.pop();
    }

    countElement() {
        return this.data.length;
    }

    printElement() {
        console.log(this.data);
    }
}

// const pila = new Stack([]);

// pila.printElement();
// pila.addElement('eze');
// pila.printElement();
// pila.addElement('moure');
// pila.printElement();
// pila.deleteElement();
// pila.printElement();
// pila.deleteElement();
// pila.printElement();
// pila.deleteElement();
// pila.addElement('mati');
// pila.addElement('guaymas');
// console.log(pila.countElement());
// pila.printElement();

class Queue {
    constructor(data) {
        this.data = data;
    }

    //equeue
    addElement(item) {
        this.data.push(item);
    }

    //deequeue
    deleteElement() {
        this.countElement() === 0 ? console.log('Pila vacia') : this.data.shift();
    }

    countElement() {
        return this.data.length;
    }

    printElement() {
        console.log(this.data);
    }
}

const cola = new Queue([]);

cola.printElement();
cola.addElement('eze');
cola.printElement();
cola.addElement('moure');
cola.printElement();
cola.deleteElement();
cola.printElement();
cola.deleteElement();
cola.printElement();
cola.deleteElement();
cola.addElement('mati');
cola.addElement('guaymas');
console.log(cola.countElement());
cola.printElement();
