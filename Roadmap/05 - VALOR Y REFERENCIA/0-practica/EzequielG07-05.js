//Variables por Valor
let a = 'Hola Mundo';
let b = a; //El valor de "a" se asigna a "b"
a += '!'; //Se modifica el valor de "a"
console.log('a', a);
console.log('b', b);

//Variables por Referencia
//Con estructuras, no se crea un nuevo valor, sino que ambas variables apuntan a un mismo espacio en memoria
let c = [1, 2, 3];
let d = c;
c.push(4);
console.log('c', c);
console.log('d', d);

//Funciones utilizando Variables por Valor
let firstFunction = function (str) {
    str = 'nuevo valor dentro de la funcion';
    return str;
};
let strOriginal = 'Fuera de la funcion';
console.log('Por valor - Dentro de la funcion: ', firstFunction(strOriginal));
console.log('Por valor - Fuera de la funcion: ', strOriginal);

//Funciones utilizando Varibles por Referencia
let secondFunction = function (arr) {
    arr.push('Moure');
    return arr;
};
let arrOriginal = ['Andres', 'Brais', 'Chape'];
console.log('Por referencia - Dentro de la funcion: ', secondFunction(arrOriginal));
console.log('Por referencia - Fuera de la funcion: ', arrOriginal);
