import {Stove} from "./RestaurantLibrary/Devices/Stove";
import { IPrepare } from "./RestaurantLibrary/Devices/dependencies/IPrepare";

export class Restaurant implements IPrepare{
    // each restaurant needs at least one CookingDevice
    private _stove:Stove;

    constructor(){
        this._stove = new Stove();
    }
    
    prepareFoodStove(item:string){
        this._stove.toggleOnDevice();
        this._stove.cook(item);
        this._stove.toggleOffDevice();
    }
}