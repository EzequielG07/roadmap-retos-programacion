// //*Arrays

// //Creación
// let my_list = ['Eze', 'Brais', 'Visionos', 'Mouredev'];
// console.log(my_list);

// //Acceso
// let first_element = my_list[0];
// console.log(first_element);

// let last_element = my_list[my_list.length - 1];
// console.log(last_element);

// //Inserción
// my_list.push('Nombre_insertado');
// console.log(my_list);
// //Copiado
// let new_list = my_list.slice();
// console.log(new_list);

// //Borrado
// my_list.pop(); //elimina último elemento
// console.log(my_list);

// my_list.shift(); //elimina primer elemento
// console.log(my_list);

// //Encontrar índice de un elemento
// let posicion = my_list.indexOf('Visionos');
// console.log(posicion);

// //Eliminar según posición
// let deleted_elements = my_list.splice(1, 2);
// console.log(deleted_elements);
// console.log(my_list);

// //Actualización
// console.log(new_list);
// new_list[1] = 'Nuevo_Brais';
// new_list[new_list.length - 1] = 'Nuevo_nombre';
// console.log(new_list);

// //Ordenación
// new_list.sort();
// console.log(new_list);
// //Ascendente
// let miArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// miArray.sort((a, b) => a - b);
// //Descendente
// let mySecondArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// mySecondArray.sort((a, b) => b - a);

// //*Objects

// //Creacion
// let myCar = new Object();
// myCar.make = 'Ford';
// myCar.model = 'Mustang';
// myCar.year = 1969;

// //?El ejemplo anterior también se podría escribir usando un iniciador de objeto
// let mySecondCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969,
// };

// //?También puedes acceder o establecer las propiedades de los objetos en JavaScript mediante la notación de corchetes ↑[]↓
// let myThirdCar = new Object();
// myThirdCar['make'] = 'Ford';
// myThirdCar['model'] = 'Mustang';
// myThirdCar['year'] = 1969;

// console.log(myCar);
// console.log(mySecondCar);
// console.log(myThirdCar);

// //?Usando una función constructora
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
// }
// let newCar = new Car('Eagle', 'Talon TSi', 1993);

// //?Un objeto puede tener una propiedad que en sí misma es otro objeto
// function Person(name, age, sex) {
//     this.name = name;
//     this.age = age;
//     this.sex = sex;
// }

// let rand = new Person('Rand McKinnon', 33, 'M');
// let ken = new Person('Ken Jones', 39, 'M');

// function Car(make, model, year, owner) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.owner = owner;
// }

// let car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
// let car2 = new Car('Nissan', '300ZX', 1992, ken);

// console.log(car1.owner.age);
// console.log(car2.owner.name);

// let miObjeto = { uno: 1, dos: 2, tres: 3 };
// miObjeto['cuatro'] = 4; // Inserción
// delete miObjeto['uno']; // Borrado
// miObjeto['dos'] = 22; // Actualización
// // Los Objects no soportan la ordenación debido a su naturaleza

// //* Sets
// let miSet = new Set([1, 2, 3, 4, 5]);
// miSet.add(6); // Inserción
// miSet.delete(1); // Borrado
// // Los Sets no soportan la actualización de un elemento específico o la ordenación debido a su naturaleza

// //* Maps
// let miMapa = new Map([
//     ['uno', 1],
//     ['dos', 2],
//     ['tres', 3],
// ]);
// miMapa.set('cuatro', 4); // Inserción
// miMapa.delete('uno'); // Borrado
// miMapa.set('dos', 22); // Actualización
// // Los Maps no soportan la ordenación debido a su naturaleza

let agenda = [
    { id: 1, name: 'Eze', number: 1161658521 },
    { id: 2, name: 'Matias', number: 1151122334 },
];

function getValidNumber() {
    let value;

    do {
        // Prompt the user for input
        value = prompt('Ingrese un número');

        // Check if the user pressed cancel
        if (value === null) {
            alert('Operación cancelada');
            return null;
        }

        // Check if the length of the input is valid
        if (value.length > 11) {
            alert('Entrada no válida, el número debe tener 11 dígitos o menos');
            continue;
        }

        // Convert input to a number
        const numberValue = Number(value);

        // Check if the converted value is actually a number
        if (!isNaN(numberValue) && value.trim() !== '') {
            // Input is valid
            return numberValue;
        } else {
            // Input is invalid, prompt again
            alert('Entrada no válida, por favor ingrese un número válido');
        }
    } while (true);
}

const myAgenda = () => {
    alert('Agenda de contactos');

    let is_On = true;

    while (is_On) {
        let numberOption = prompt(`Ingrese una opción:
            1. Buscar contacto
            2. Agregar contacto
            3. Borrar contacto
            4. Actualizar contacto.
            5. Finalizar programa`);

        if (numberOption === null) {
            alert('Operación cancelada');
            break;
        }

        switch (numberOption) {
            case '1':
                alert('selecciono 1');
                let numberId = parseInt(prompt('Introduce Id que desea buscar'));
                let user = agenda.find((user) => user.id === numberId);
                if (user !== undefined) {
                    console.log(user);
                } else {
                    alert('Usuario no existe');
                }
                break;

            case '2':
                alert('selecciono 2');
                let id = agenda.length + 1;
                let name = prompt('Introduce nombre');
                let number = getValidNumber();
                if (number !== null) {
                    agenda.push({ id, name, number });
                }
                break;

            case '3':
                alert('selecciono 3');
                let deleteId = parseInt(prompt('Introduce Id del usuario que desea eliminar'));
                let indexToRemove = agenda.findIndex((user) => user.id === deleteId);
                if (indexToRemove !== -1) {
                    agenda.splice(indexToRemove, 1);
                    alert(`Usuario id: ${deleteId} fue borrado correctamente`);
                } else {
                    alert('Usuario no encontrado');
                }
                break;

            case '4':
                alert('selecciono 4');
                let updateId = parseInt(prompt('Introduce el Id del usuario que desea MODIFICAR'));
                let indexToUpdate = agenda.findIndex((user) => user.id === updateId);
                if (indexToUpdate !== -1) {
                    let updateOption = prompt(`Ingrese la opcion que desesa modificar:
                        1. Nombre.
                        2. Telefono.`);
                    switch (updateOption) {
                        case '1':
                            let newName = prompt('Ingrese nuevo nombre');
                            agenda[indexToUpdate].name = newName;
                            break;

                        case '2':
                            let newNumber = getValidNumber();
                            agenda[indexToUpdate].number = newNumber;
                            break;

                        default:
                            alert('Opcion no valida para modificar');
                    }
                } else {
                    alert('Usuario no encontrado');
                }
                break;

            case '5':
                alert('selecciono 5');
                is_On = false;
                break;
            default:
                alert('Lo sentimos opcion no valida');
        }
    }
};

myAgenda();
