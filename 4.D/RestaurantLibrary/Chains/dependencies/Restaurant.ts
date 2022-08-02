import { IPrepare } from "./IPrepare";
import { ICanCook } from "../../Devices/dependencies/ICanCook";

export abstract class Restaurant implements IPrepare{
    // each restaurant needs at least one CookingDevice
    protected _cookable:ICanCook;

    prepareFood(item: string) {
        this._cookable.toggleOnDevice();
        this._cookable.cook(item);
        this._cookable.toggleOffDevice();
    }
}