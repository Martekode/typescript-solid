import { Restaurant } from "../../Restaurant";
import { Oven } from "../Devices/Oven";

export class Bakery extends Restaurant {
    private _oven:Oven;
    
    constructor(){
        super();
        this._oven = new Oven();
    }

prepareFoodOven(item: string): void {
    this._oven.toggleOnDevice();
    this._oven.cook(item);
    this._oven.toggleOffDevice();
}

    public get oven():Oven {
        return this._oven;
    }
}