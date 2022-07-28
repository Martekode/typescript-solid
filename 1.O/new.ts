interface iMakeSound{
    makeSound():string;
}

class Animal {
    protected _name: string;
    protected _type: string;
    protected _sound: string;
    public constructor(name:string,type:string,sound:string){
        this._type = type;
        this._sound = sound;
        this._name = name
    }

    get type() {
        return this._type;
    }
    makeSound():string{
        return this._sound;
    }

}

class Dog extends Animal implements iMakeSound{
    public constructor(name:string,type:string,sound:string){
        super(name,type,sound)
    }
    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

}

class Cat extends Animal implements iMakeSound{
    constructor(name:string,type:string,sound:string){
        super(name,type,sound)
    }
    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }
}

class Parrot extends Animal implements iMakeSound{
    public constructor(name:string,type:string,sound:string){
        super(name,type,sound)
    }
    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }
}

class Zoo {
    private _animals : Array<Animal> = new Array<Animal>();

    public addAnimal(animal: Animal) {
        this._animals.push(animal);
    }

    get animals(): Array<Animal> {
        return this._animals;
    }
}
let zoo = new Zoo;
zoo.addAnimal(new Cat('bobby',"cat","miaw"));
zoo.addAnimal(new Dog("fifi","dog","woof"));
zoo.addAnimal(new Parrot("rikkert34","parrot","look at me, fuck on me, look at, UH"));

zoo.animals.forEach((animal: Animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});