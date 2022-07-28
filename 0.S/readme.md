# Single responsibility principle

## Theory
A class should only have a single responsibility, that is, only changes to one part of the software's specification should be able to affect the specification of the class.
That might sound very theoretic so look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine.
There are a couple of problems with this:

- The Car class is a classic example of a so-called “God object” — that is, an object that knows about and does everything. These types of objects are really hard to maintain, extend and test.
- We have to prefix every variable with the correct domain eg. "engineStatus". It would be nicer to just name it "Status" but we cannot do this in the car because you might confuse it with the status of the MusicPlayer.
- What if want different types of engines with different ways of consuming fuel? We would have to put a lot of extra if-statements in our car class.

## Your mission
Look at the old.ts file and open the index.html file, you can see the software has some options to handle fuel, music and the engine. However, these are really 3 separate domains making the current Car object really strange.
Refactor the code, so we have at least a separate class for Car, Engine and MusicPlayer. Where do you think we should place the fuel functionality?

### Extra challenge
Make a new type of Engine that also consumes Fuel

# solution by martekode:
i serperated the car, radio and engine class from each other. and i made them properties in the car class. 
```ts
    private _engine : Engine;
    private _radio : Radio;

    public constructor(MAX_FUEL_CAPACITY:number){
        this._engine = new Engine(MAX_FUEL_CAPACITY);
        this._radio = new Radio();
    }
```
the MAX_FUEL_CAPACITY is passed as property because it is needed for the creation of the engine object. so we pass a parameter in this constructor of the car to the constructor of the engine.
```ts
        this.engine.consumeFuel()
        this.engine.addMileage()
```
made these into functions sinds magic numbers are made by saruman.

I wrote getters for the engine and radio object as properties of car.
```ts
    public get radio() : Radio{
        return this._radio;
    }
    public get engine():Engine{
        return this._engine;
    }
```
and this is it for the car class

Now the engine class:
```ts
class Engine {
    private _fuel : number = 0;
    private _miles : number = 0;
    private _status: boolean = false;
    private readonly MAXIMUM_FUEL_CAPACITY: number;
    private readonly FUEL_MILEAGE: number = 10;
    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    get miles(): number {
        return this._miles;
    }
//Take attention to these getter and setters
    public get getMaxFuelCap(){
        return this.MAXIMUM_FUEL_CAPACITY;
    }
    public get getFuelMileage(){
        return this.FUEL_MILEAGE;
    }
    get fuel(): number {
        return this._fuel;
    }
    consumeFuel(){
        this._fuel -= 1 ;
    }
    addMileage(){
        this._miles += this.getFuelMileage;
    }
    //When a value can only go one way (you add fuel, consuming fuel is handled by the car itself)
    // it is better to provide a specific method for this instead of a generic setter.
    // with a setter there is always the chance of somebody lowering the fuel amount by accident.
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get status(): boolean {
        return this._status;
    }

    turnEngineOn() {
        this._status = true;
    }

    turnEngineOff() {
        this._status = false;
    }

}
```
there is a lot here: the constructor that was previously in the car is now placed here. i cteated some getters because i needed some before i refactored alot. it is possible that i don't need all of them anymore but i keep em for now just in case. just know that i do know there are probably too many.
```ts
    consumeFuel(){
        this._fuel -= 1 ;
    }
    addMileage(){
        this._miles += this.getFuelMileage;
    }
```
here are the consume fuel func and the add mileage func.

now the Radio:
```ts
class Radio{
    private _musicLevel : number = 0;
    private _oldMusicLevel : number = 50;

    get musicLevel(): number {
        return this._musicLevel;
    }

    set musicLevel(value: number) {
        this._musicLevel = value;
        this._oldMusicLevel = value;
    }

    turnMusicOn() {
        this._musicLevel = this._oldMusicLevel;
    }

    turnMusicOff() {
        this._musicLevel = 0;
    }
}
```
there is no contructor relly needed sinds the radio comes out of the bow preconfigured.


