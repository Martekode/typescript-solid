# Open–closed principle
Classes should be open for extension, but closed for modification. In more simple words you can always add new code to an object, but you should never change the design of old code.

It is much better to work with **dependencies**, meaning passing an object to another object as a parameter. 

Ideal code should be written with the **Blackbox** principle in mind, you should be able to guess what a function does just looking at its signature.

Consider how the coupling of two entities affects their respective maintainability. The more a given entity knows about how another one is implemented, the more we can say that they are coupled. Therefore, if one of the two entities is changed, then the other must be changed too.

### Arrays with meaning
Other examples of bad code practices not listing to the Open Closed Principle is having objects return Associative Arrays with meaning (the labels are used later on outside the class)

````typescript
function getProducts() {
    return [{'name': 'chair', 'price': 5}, {'name': 'table', 'price': 15}, {'name': 'bed', 'price': 20}];
}
//the zero at the end refers to the default value when no total has been calculated yet (first value of total)
// This is needed in case the getProducts() returns an empty array
let totalPrice = getProducts().reduce((total, product) => total + product.price, 0);
````

You can improve on this in 2 ways in TypeScript, you can create a Product class or create a literal:
````typescript
    type Product = {'name': string, 'price': number};
    type ProductCollection = Product[];
````

## Your mission
Look at the old.ts file, and you see a bunch of animals in a zoo, all making the sounds.
Now add another animal (you can choose your favorite animal), and make sure it makes a sound.

Did you notice you needed to alter the Zoo object even when all you did was add a new Animal class? Would it not be much better to move the `makeSound` function to each Animal class, so each animal can decide for himself what sound he makes instead of the Zoo class?

Create a `makeSound` function to each Animal class and remove the giant switch from the Zoo class. Now you can easily add new animals without altering an existing class!

```ts
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
```
made an interface that states the methods that are required for every class that needs it. we extend from animal so that we also take over the properties. I wanted to do the properties inside the interface but that's not possible. (well kindoff) It works for public porperties and getters wich are methods and would work either way. This is not conveniant sinds i want private or protected properties, so that's why i make an animal class to extend from. This is how i tranfer the properties to the child classes with protect. So this task ends up being a combination of interface and extentions from parent class. The interface is usable for all classes that need to make sound. 

i also learned about generics, these are represented by ```<Generic>``` and imply the type of content of an array. i had some errors with them sinds it checked for "objectss" and it needed to check for animal.

The classes were already seperated but contained repeated code that we eliminated with the parent class animal. defining the porperties are done in contructors instead of literally at instantiating. i learned to extend and implement at the same time.