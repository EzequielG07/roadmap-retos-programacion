//*1-------------------------------------------------------------
//https://developer.mozilla.org/es/docs/Web/JavaScript

//*2-------------------------------------------------------------
//un comentario de una línea

/*
este es un comentario
más largo, de varias líneas
*/

//*3-------------------------------------------------------------
var myVariable = 'Mi variable';
let mySecondVariable = 'Mi segunda variable';
mySecondVariable = 'Nueno valor de mi variable';
const myConstant = 'Mi constante';

//*4-------------------------------------------------------------
const status = true; //boolean
const question = false; //bolean
const nulo = null; //null
let value; //undefined
let numberInt = 32; //number entero
let numberFloat = 32.15; //number float
let numeroGrande1 = 1234567890123456789012345n; //bigInt
let numeroGrande2 = BigInt(1234567890123456789012345); //bigInt
const text = 'text'; //string
const textChain = 'cadena de texto'; //string
const symbol = Symbol('my symbol'); //symbol
//*5-------------------------------------------------------------
console.log('Hola, Javascript');

const language = 'Javascript';
console.log(`Hola, ${language}`);
//*extra para ver el tipo de variable
console.log(typeof question);
