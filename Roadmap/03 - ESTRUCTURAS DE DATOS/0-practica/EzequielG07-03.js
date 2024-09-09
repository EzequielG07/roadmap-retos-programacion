//*Arrays

//Creación
let my_list = ['Eze', 'Brais', 'Visionos', 'Mouredev'];
console.log(my_list);

//Acceso
let first_element = my_list[0];
console.log(first_element);

let last_element = my_list[my_list.length - 1];
console.log(last_element);

//Inserción
my_list.push('Nombre_insertado');
console.log(my_list);
//Copiado
let new_list = my_list.slice();
console.log(new_list);

//Borrado
my_list.pop(); //elimina último elemento
console.log(my_list);

my_list.shift(); //elimina primer elemento
console.log(my_list);

//Encontrar índice de un elemento
let posicion = my_list.indexOf('Visionos');
console.log(posicion);

//Eliminar según posición
let deleted_elements = my_list.splice(1, 2);
console.log(deleted_elements);
console.log(my_list);

//Actualización
console.log(new_list);
new_list[1] = 'Nuevo_Brais';
new_list[new_list.length - 1] = 'Nuevo_nombre';
console.log(new_list);

//Ordenación
new_list.sort();
console.log(new_list);
//Ascendente
let miArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
miArray.sort((a, b) => a - b);
//Descendente
let mySecondArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
mySecondArray.sort((a, b) => b - a);
