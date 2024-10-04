//PILAS (STACK)
var pila = [1, 2, 3, 4, 5];
console.log('pila original', pila);

pila.push(6);
console.log('agregar elemento a la pila en la ultima posicion', pila);

pila.pop();
console.log('eliminar el ultimo elemento agregado a la pila', pila);

// *COLAS (QUEUE)
var cola = ['b', 'c', 'd', 'e', 'f'];
console.log('cola original', cola);

cola.unshift('a');
console.log('agregar elemento a la cola en la ultima posicion (izquierda)', cola);

cola.shift();
console.log('eliminar el ultimo elemento de la cola (elementos que fue agregado primero)', cola);
