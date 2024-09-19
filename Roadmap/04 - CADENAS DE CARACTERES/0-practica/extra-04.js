const esPalindromo = (word) => {
    const newWord = word.split('').reverse().join('');
    if (word === newWord) {
        console.log(`La palabra ${word} es un PALINDROMO`);
    } else {
        console.log(`La palabra ${word} NO ES PALINDROMO`);
    }
};

// // esPalindromo('radar');
// // esPalindromo('neuquen');
// // esPalindromo('perro');

const sonAnagramas = (word1, word2) => {
    const arr1 = Array.from(word1).sort().join('');
    const arr2 = Array.from(word2).sort().join('');

    arr1 === arr2
        ? console.log(`Las palabras ${word1} y ${word2} son ANAGRAMAS`)
        : console.log(`Las palabras ${word1} y ${word2} NO SON ANAGRAMAS`);

    // if (arr1 === arr2) {
    //     console.log(`Las palabras ${word1} y ${word2} son ANAGRAMAS`);
    // } else {
    //     console.log(`Las palabras ${word1} y ${word2} NO SON ANAGRAMAS`);
    // }
};

// // sonAnagramas('amor', 'roma');
// // sonAnagramas('perro', 'perra');

const esHeterograma = (word) => {
    const arr = Array.from(word);
    const isogram = arr.some((value, index) => arr.indexOf(value) !== index);
    isogram !== true
        ? console.log(`La palabra "${word}" es un HETEROGRAMA`)
        : console.log(`La palabra "${word} NO ES UN HETEROGRAMA"`);
};

// // esHeterograma('murcielago');
// // esHeterograma('violeta');
// // esHeterograma('perro');

const isIsograma = (word) => {
    const arr = Array.from(word);
    let characters = {};

    arr.forEach((char) => {
        characters[char] = (characters[char] || 0) + 1;
    }); //?--> crea el obj con los caracteres como keys y la cantidad como los values

    const setOfCharacters = new Set(Object.values(characters)); //?--> creo el set, desde un array generado a partir de los values del Obj "characters"

    setOfCharacters.size > 1
        ? console.log(`La palabra ${word} no es un ISOGRAMA`)
        : console.log(`La palabra ${word} ES ISOGRAMA`);
};

// // isIsograma('murcielago');
// // isIsograma('radar');
// // isIsograma('phytonphytonphytonphyton');
// // isIsograma('radarradar');

//sgte funcion para abarcar todo lo anterior

const check = (str1, str2) => {
    //palindromo
    const isPalindromo1 = str1.split('').reverse().join('');
    const isPalindromo2 = str2.split('').reverse().join('');

    isPalindromo1 === str1 ? console.log(`"${str1}" es PALINDROMO`) : console.log(`"${str1}" NO ES PALINDROMO`);
    isPalindromo2 === str2 ? console.log(`"${str2}" es PALINDROMO`) : console.log(`"${str2}" NO ES PALINDROMO`);

    //anagramas
    const arr1 = Array.from(str1);
    const arr2 = Array.from(str2);

    arr1.sort().join('') === arr2.sort().join('')
        ? console.log(`"${str1}" y "${str2}" son ANAGRAMAS`)
        : console.log(`"${str1}" y "${str2}" NO SON ANAGRAMAS`);

    //heterograma
    const heterogram1 = arr1.some((value, index) => arr1.indexOf(value) !== index);
    const heterogram2 = arr2.some((value, index) => arr2.indexOf(value) !== index);

    heterogram1 !== true ? console.log(`"${str1}" es HETEROGRAMA`) : console.log(`"${str1}" NO ES HETEROGRAMA`);
    heterogram2 !== true ? console.log(`"${str2}" es HETEROGRAMA`) : console.log(`"${str2}" NO ES HETEROGRAMAA`);

    //isograma

    let characters1 = {};
    let characters2 = {};

    arr1.forEach((char) => {
        characters1[char] = (characters1[char] || 0) + 1;
    });
    arr2.forEach((char) => {
        characters2[char] = (characters2[char] || 0) + 1;
    });

    const setOfCharacters1 = new Set(Object.values(characters1));
    const setOfCharacters2 = new Set(Object.values(characters2));

    setOfCharacters1.size > 1 ? console.log(`"${str1}" NO ES ISOGRAMA`) : console.log(`"${str1}" ES ISOGRAMA`);
    setOfCharacters2.size > 1 ? console.log(`"${str2}" NO ES ISOGRAMA`) : console.log(`"${str2}" ES ISOGRAMA`);
};

check('amor', 'roma');
check('radar', 'perro');
check('amoramoramor', 'murcielago');
