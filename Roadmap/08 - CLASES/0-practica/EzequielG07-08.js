class Programmer {
    constructor(name, age, languages) {
        (this.name = name), (this.age = age), (this.languages = languages);
    }

    print = () =>
        console.log(`
    Nombre: ${this.name}
    Edad:${this.age}
    Lenguajes: ${this.languages}`);
}

const programmer = new Programmer('eze', 32, ['javascript', 'phyton']);

programmer.print();
