const countDown = (num) => {
    if (num >= 0) {
        console.log(`${num}`);
        countDown(num - 1);
    }
};

// countDown(100);

const factorial = (num) => {
    if (num < 0) {
        console.log('valor negativo no valido');
        return -1;
    } else if (num == 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
};

// console.log(factorial(5));

const fibonacci = (num) => {
    if (num <= 0) {
        console.log('valor negativo no valido');
        return -1;
    } else if (num == 1) {
        return 0;
    } else if (num == 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
};

// console.log(fibonacci(10));

const reverse = (str) => {
    revStr = str.split('').reverse().join('');
    console.log(revStr);
};

// reverse('hola');

//? Escribe un programa que invierta una cadena usando recursión. Dada la cadena "freeCodeCamp", el programa debería devolver "pmaCedoCeerf".

const reverseStr = (str) => {
    if (str.length <= 0) {
        return '';
    } else {
        return reverseStr(str.slice(1)) + str.charAt(0);
    }
};

// console.log(reverseStr('freeCodeCamp'));

//? Escribe un programa que devuelva el número de veces que aparece una letra en una cadena. Tu programa debería recibir una cadena y la letra.
//? let programa = (cadena, letra) => {...}
//? Después, debe devolver el número de veces que la letra aparece en la cadena. Dado el texto "JavaScript" y la letra  "a", su programa debe devolver 2.‌‌‌‌
//? Pista: Intenta averiguar cuándo quieres que la función deje de llamarse a sí misma y cómo devolver una versión más pequeña del problema cada vez que la función se llama a sí misma.

const program = (str, char) => {
    const count = (str, char, index = 0) => {
        if (index >= str.length) {
            return 0;
        } else {
            const countChar = str[index].toLowerCase() === char.toLowerCase() ? 1 : 0;

            return countChar + count(str, char, index + 1);
        }
    };
    return count(str, char);
};

console.log(program('javascript', 'a'));
