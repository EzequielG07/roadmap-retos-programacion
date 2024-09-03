//*1-------------------------------------------------------------
// //*Operadores de asignación-------------------------------------------------------------
// //asignación
// let x = 5;
// let y = 2;
// console.log(`Asignacion de X=${x} e Y=${y}.`);

// //Asignación de adicion
// console.log(`Adicion "x = x + y" --> X=${(x = x + y)}`);

// console.log(`Adicion abreviada "x += y" --> X=${(x += y)}`);

// // Asignación de resta
// console.log(`Resta "x = x - y" --> X=${(x = x - y)}`);

// console.log(`Resta abreviada "x -= y" --> X=${(x -= y)}`);

// //Asignación de multiplicación
// console.log(`Multiplicación "x = x * y" --> X=${(x = x * y)}`);

// console.log(`Multiplicacion abreviada "x *+ y" --> X=${(x *= y)}`);

// //Asignación de división
// console.log(`Division "x = x / y" --> X=${(x = x / y)}`);

// console.log(`División abreviada "x /= y" --> X=${(x /= y)}`);

// //Asingnación de residuo (Modulo)
// console.log(`Residuo "x = x % y" --> X=${(x = x % y)}`);

// console.log(`Residuo abreviado "x %= y --> X=${(x %= y)}`);

// //Asignación de exponenciación
// console.log(`Exponenciación "x = x ** y" --> X=${(x = x ** y)}`);

// console.log(`Exponenciación abreviada "x **= y" --> X=${(x **= y)}`);

// //Asignación de desplazamiento a la izquierda
// console.log(`desplazamiento a la izquierda "x = x << y" --> X=${(x = x << y)}`);

// console.log(`desplazamiento a la izquierda abreviado "x <<= y" --> X=${(x <<= y)}`);

// //Asignación de desplazamiento a la derecha
// console.log(`desplazamiento a la derecha "x = x >> y" --> X=${(x = x >> y)}`);

// console.log(`desplazamiento a la derecha abreviado "x >>= y" --> X=${(x >>= y)}`);

// //Asignación de desplazamiento a la derecha sin signo
// console.log(`desplazamiento a la derecha sin signo "x = x >>> y" --> X=${(x = x >>> y)}`);

// console.log(`desplazamiento a la derecha sin signo abreviado "x >>>= y" --> X=${(x >>>= y)}`);

// //Asignación AND bit a bit
// console.log(`AND bit a bit "x = x & y" --> X=${(x = x & y)}`);

// console.log(`AND bit a bit "x &= y --> X=${(x &= y)}`);

// //Asignación XOR bit a bit
// console.log(`XOR bit a bit "x = x ^ y" --> X=${(x = x ^ y)}`);

// console.log(`XOR bit a bit abreviado "x ^= y" --> X=${(x ^= y)}`);

// //Asignación OR bit a bit
// console.log(`OR bit a bit "x = x | y" --> X=${(x = x | y)}`);

// console.log(`OR bit a bit abreviado "x |= y" --> X=${(x |= y)}`);

// //Asignación AND lógico
// console.log(`AND lógico "x && (x = y) --> X=${x && (x = y)}`);

// console.log(`AND lógico abreviado "x &&= y" --> X=${(x &&= y)}`);

// //Asignación OR lógico
// console.log(`OR lógico "x || (x = y) --> X=${x || (x = y)}`);

// console.log(`OR lógico abreviado "x ||= y" --> X=${(x ||= y)}`);

// //Asignación de anulación lógica
// console.log(`Anulación lógica "x ?? (x = y)" --> X=${x ?? (x = y)}`);

// console.log(`Anulación lógica abreviado "x ??= y" --> X=${(x ??= y)}`);

// //*Operadores de comparación-------------------------------------------------------------
// let a = 3;
// let b = 4;
// let c = '3';
// console.log(`a=3; b=4; c='3'`);

// //Igual (==)
// console.log(`Igual: "a == b", ${a == b}`);
// console.log(`Igual: "a == c", ${a == c}`);

// //No es igual (!=)
// console.log(`No es igual: "a != b", ${a != b}`);

// //Estrictamente igual (===)
// console.log(`Estrictamente igual: "a === c", ${a === c}`);

// //Desigualdad escricta (!==)
// console.log(`Desigualdad escricta: "a !== c", ${a !== c}`);

// //Mayor que (>)
// console.log(`Mayor que: "a > b", ${a > b}`);
// console.log(`Mayor que: "b > a", ${b > a}`);

// //Mayor o igual que (>=)
// console.log(`Mayor o igual que: "a >= b", ${a >= b}`);
// //Menor que (<)
// console.log(`Menor que: "a < b", ${a < b}`);
// console.log(`Menor que: "b < a", ${b < a}`);

// //Menor o igual que (<=)
// console.log(`Menor o igual que: "a <= b", ${a <= b}`);

// //* Operadores Aritméticos-------------------------------------------------------------
// let num1 = 10;
// let num2 = 4;
// //Residuo
// console.log('Residuo: ', num1 % num2);

// //Incremento
// console.log('Incremento antes de imprimir: ', ++num1);
// console.log('Incremento despues de imprimir: ', num1++); //Se vuelve 12 luego de imprimir

// //Decremento
// console.log('Decremento antes de imprimir: ', --num1);
// console.log('Decremento despues de imprimir: ', num1--); //Se vuelve 10 luego de imprimir

// //Negacion unitaria
// console.log('Negacion unitaria: ', -num1);

// //Positivo unitaria
// console.log('Negacion unitaria: ', +num1);
// //Exponenciacion

// console.log('Exponenciacion: ', Math.pow(num1, num2));

// //*Operadores bit a bit-------------------------------------------------------------
// let bit1 = 6;
// let bit2 = 8;

// //Desplazamiento a la izquierda
// console.log('Desplazamiento a la izquierda:', bit1 << bit2);

// //Desplazamiento a la derecha
// console.log('Desplazamiento a la derecha:', bit1 >> bit2);

// //AND
// console.log('AND bit a bit:', bit1 & bit2);

// //OR
// console.log('AND bit a bit:', bit1 | bit2);

// //XOR
// console.log('AND bit a bit:', bit1 ^ bit2);

// //NOT
// console.log('AND bit a bit:', bit1, ~bit2);

// //* Operadores lógicos-------------------------------------------------------------
// let exp1 = true;
// let exp2 = false;

// //AND logico
// console.log('AND Logico: ', exp1 && exp2);

// //OR logico
// console.log('OR Logico: ', exp1 || exp2);

// //NOT logico
// console.log('NOT Logico: ', !exp1);

// //* Operadores de Cadena-------------------------------------------------------------
// console.log('mi ' + 'cadena');

// //* Operador condicional terciario-------------------------------------------------------------

// let result = true ? true : false;
// console.log(result);
// let user = {
//     id: '1',
//     name: 'Andres',
//     age: 86,
// };

// console.log('Existe "age" en el objeto user?: ', 'age' in user);
// console.log('Existe "country" en el objeto user?: ', 'country' in user);

//* Ejercicio extra

for (let i = 10; i <= 55; i++) {
    if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
        console.log(`iteracion: ${i}`);
    }
}
