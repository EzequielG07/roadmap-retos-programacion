//Cadena de caracteres

let s1 = 'Hola';
let s2 = 'Javascript';
let s3 = 'Eze Guaymas @EzequielG07';

//*Concatenación
console.log('Concatenación:\n' + s1 + ' ' + s2 + ' ' + 'Concatenación');

//*Repetición
console.log('Repetición:\n' + s2.repeat(3));

//*Indexación
console.log('Indexación: \n' + s3.indexOf('Guaymas'));
console.log('Indexación 1er posición: \n' + s3.indexOf('e'));
console.log('Indexación última posición: \n' + s3.lastIndexOf('e'));

//*Longitud
console.log('Longitud: \n' + s2.length);

//*Slicing(Porción)
console.log('Slicing: \n' + s3.slice(4, -2));

//?inicioTrozo
//?El índice basado en cero en el cual empieza la extracción. Si es negativo, se trata como longCadena + inicioTrozo donde longCadena es la longitud de la cadena (por ejemplo, si inicioTrozo es -3 se trata como longCadena - 3)

//?finTrozo
//?Opcional. El índice basado en cero en el que termina la extracción. Si se omite, slice extrae hasta el final de la cadena. Si es negativo, se trata como longCadena + finTrozo donde longCadena es la longitud de la cadena (por ejemplo, si finTrozo es -3 se trata como longCadena - 3).

//*Busqueda
console.log('Busqueda (Guaymas): \n' + s3.search('Guaymas')); //devuelve la posicion
console.log('Busqueda (Wuaymas): \n' + s3.search('Wuaymas')); //devuelve -1 si no encuentra la palabra

//*Incluye
console.log('Incluye (Guaymas): \n' + s3.includes('Guaymas'));
console.log('Incluye (Wuaymas): \n' + s3.includes('Wuaymas'));

//*Reemplazo
console.log('Reemplazo: \n' + s3.replace('Eze', 'Yo soy'));

//*División
console.log('División: \n' + s2.split('a'));
console.log('División: \n' + s3.split(' ', 2));

//*Mayúsculas y minúsculas y letras en mayúsculas
console.log('Mayúscula: \n' + s2.toUpperCase());
console.log('Minúscula: \n' + s3.toLowerCase());

//*Eliminación de espacios al principio y las final
let s4 = '   "Espacios vacios"   ';
console.log('Elminación de espacios de:', s4);
console.log('trim:', s4.trim());
console.log('trimStart:', s4.trimStart());
console.log('trimEnd:', s4.trimEnd());

//*Agrega valores al principio y al final

console.log('padStart', s3.padStart(50, '-'));
console.log('padStart', s3.padStart(102, '.'));
console.log('padEnd', s3.padEnd(40, '^'));
console.log('padEnd', s3.padEnd(80, '*'));

//*Busqueda al principio y al final
console.log('Principio: \n' + s3.startsWith('Eze'));
console.log('Principio: \n' + s3.startsWith('@EzequielG07'));
console.log('Final: \n' + s3.endsWith('Eze'));
console.log('Final: \n' + s3.endsWith('@EzequielG07'));

//*Búsqueda de posición

//*Búsquedas de ocurrencias
//? No hay un metodo count como en phyton pero se puede usando filter
let count = 0;
const charToCount = 'e';

for (const char of s3) {
    if (char === charToCount) {
        count++;
    }
}
console.log(`Busqueda de ocurrencias de la letra e: ${count}`);

//*Interpolación
console.log(`Saludo: ${s1}, lengueje: ${s2}!`);

//*Transfomación de lista en cadena
let s5 = ['Hola', ' ', 'Como', ' ', 'Estas?'];
console.log('Array en cadena de caracteres: \n' + s5.join());

//*Transfomaciones númericas
let s6 = '123456';
let s7 = '123456.789';
console.log('String de número entero:' + parseInt(s6));
console.log('String de décimal:' + parseFloat(s7));
