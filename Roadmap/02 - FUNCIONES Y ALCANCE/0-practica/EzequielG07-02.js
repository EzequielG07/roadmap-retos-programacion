// //*Funciones definidas por el usuario

// //*Simple-------------------------------------------------------------

// function greet() {
//     console.log('Hola, Javascript');
// }

// greet();

// //*Con retorno

// function return_greet() {
//     return 'Hola otra vez, Javascript ';
// }

// let greeting = return_greet();
// console.log(greeting);
// console.log(return_greet());

// //*Con argumento

// function arg_greet(name) {
//     console.log(`Hola, ${name}`);
// }

// arg_greet('Ezequiel');

// //*Con argumentos

// function args_greet(greet, name) {
//     console.log(`${greet}, ${name}`);
// }

// args_greet('Hi', 'Eze');

// //*Con argumentos predeterminados

// function default_arg_greet(name = 'Javascript') {
//     console.log(`Saludo predeterminado, ${name}`);
// }

// default_arg_greet();
// default_arg_greet('Matias');

// //*Con argumentos y retorno

// function return_args_greet(greet, name) {
//     return `${greet}, ${name}`;
// }

// console.log(return_args_greet('Hi', 'Ezequiel (con retorno)'));

// //*Función dentro de funciones

// function outer_function() {
//     function inner_function() {
//         console.log(`Funcion interna: Hola, Javascript!`);
//     }
//     inner_function();
// }

// outer_function();

// //*Funciones del lenguaje (built-in)

// // En este ejemplo se utiliza Math. Math es un objeto incorporado que tiene propiedades y métodos para constantes y funciones matemáticas. No es un objeto de función. A diferencia de los demás objetos globales, el objeto Math no se puede editar.
// //Math funciona con el tipo Number. No funciona con BigInt.

// // Utilizando Math para calcular la superficie de un círculo recordando que la fórmula es PI*r2:

// const superficie = (radio) => {
//     let superficieCirculo = Number((Math.PI * Math.pow(radio, 2)).toFixed(2)); // la función toFixed() devuelve un string
//     return superficieCirculo;
// };

// console.log(superficie(2));

// //* Variables locales y globales (scope)

// let global_var = 'Javascript';

// function hello_javascript() {
//     let local_var = 'Hola';
//     console.log(`${local_var} Variable Global: ${global_var}`);
// }
// // console.log(local_var);//!Uncaught ReferenceError ReferenceError: local_var is not defined.

// hello_javascript();

//*Ejercio Extra------------------------------------------------------------------------

const exercise = (text1, text2) => {
    contador = 0;
    for (i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`Números que son ${text1} y ${text2}`);
        } else if (i % 3 === 0) {
            console.log(`Números que son ${text1}`);
        } else if (i % 5 === 0) {
            console.log(`Números que son ${text2}`);
        } else {
            console.log(`Iteracion ${i}`);
            contador++;
        }
    }
    return contador;
};

console.log(exercise('Múltiplo de 3', 'Múltiplo de 5'));
