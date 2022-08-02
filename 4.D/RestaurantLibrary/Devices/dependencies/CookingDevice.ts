import {ICanCook} from "./ICanCook"
export class CookingDevice{
    protected _isOn:boolean;
    constructor(){
        this._isOn = false;
    }
}