import { Restaurant } from "./dependencies/Restaurant";
import { Oven } from "../Devices/Oven";
import { Stove } from "../Devices/Stove";

export class Bakery extends Restaurant {
    private _oven:Oven;
    private _stove:Stove;
    
    constructor(){
        super();
        this._oven = new Oven();
        this._stove = new Stove();
    }

prepareFood(item: string): void {
    if (item === "cookies"){
        this.useOven(item);
    }else if(item === "crepes"){
        this.useStove(item);
    }
}

private useStove(item: string): void {
    this._stove.toggleOnDevice();
    this._stove.cook(item);
    this._stove.toggleOffDevice();
}

private useOven(item: string):void {
    this._oven.toggleOnDevice();
    this._oven.cook(item);
    this._oven.toggleOffDevice();
}

public get oven():Oven {
    return this._oven;
}
}