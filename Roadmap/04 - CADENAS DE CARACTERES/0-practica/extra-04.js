const esPalindromo = (word) => {
    const newWord = word.split('').reverse().join('');
    if (word === newWord) {
        console.log(`La palabra ${word} es un PALINDROMO`);
    } else {
        console.log(`La palabra ${word} NO ES PALINDROMO`);
    }
};

esPalindromo('radar');
esPalindromo('neuquen');
esPalindromo('perro');

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

sonAnagramas('amor', 'roma');
sonAnagramas('perro', 'perra');

const esIsograma = (word) => {
    const arr = Array.from(word);
    const isogram = arr.some((value, index) => arr.indexOf(value) !== index);
    isogram !== true
        ? console.log(`La palabra "${word}" es un ISOGRAMA`)
        : console.log(`La palabra "${word} NO ES UN ISOGRAMA"`);
};

esIsograma('murcielago');
esIsograma('violeta');
esIsograma('perro');

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

    //isograma
    const isogram1 = arr1.some((value, index) => arr1.indexOf(value) !== index);
    const isogram2 = arr2.some((value, index) => arr2.indexOf(value) !== index);

    isogram1 !== true ? console.log(`"${str1}" es ISOGRAMA`) : console.log(`"${str1}" NO ES ISOGRAMA`);
    isogram2 !== true ? console.log(`"${str2}" es ISOGRAMA`) : console.log(`"${str2}" NO ES ISOGRAMA`);
};

check('amor', 'roma');
check('radar', 'neuquen');
