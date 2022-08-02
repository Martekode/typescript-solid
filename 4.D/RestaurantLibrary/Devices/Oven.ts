import { CookingDevice} from "./dependencies/CookingDevice";
import { ICanCook } from "./dependencies/ICanCook";
export class Oven extends CookingDevice implements ICanCook{

    constructor(){
        super();
    }
    public toggleOnDevice(): void {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : DEVICE IS TOGGLED ON</p>";
        }, 1000);
        console.log("DEVICE IS TOGGLED ON"); //insert fart humor here
        this._isOn = true;
    }

    public toggleOffDevice(): void {
        setTimeout(function (){
            document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : DEVICE TOGGLED OFF</p><hr>";
        }, 3000);
        console.log("DEVICE TOGGLED OFF"); //insert fart humor here
        this._isOn = false;
    }

    public cook(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Device is not Toggled On</p>";
            }, 2000);
            console.log("there is no gas!");//insert fart humor here
        }
    }
}