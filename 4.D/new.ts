class CookingDevice{
    protected _isOn:boolean;
    constructor(){
        this._isOn = false;
    }
}
interface ICanCook{
    toggleOnDevice():void;
    toggleOffDevice():void;
    prepare(item:string):void;

}
class Oven extends CookingDevice implements ICanCook{

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

    public prepare(item : string)
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

class Stove extends CookingDevice implements ICanCook{

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

    public prepare(item : string)
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
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : DEVICE IS NOT TOOGLED ON</p>";
            }, 2000);
            console.log("DEVICE IS NOT TOGGLED ON");//insert fart humor here
        }
    }
}
class DefaultDevice extends CookingDevice implements ICanCook{

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

    public prepare(item : string)
    {
        if(this._isOn) {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : Now Preparing " + item + " !</p>";
            }, 2000);
            console.log("Now preparing " + item + "!");
        }
        else
        {
            setTimeout(function (){
                document.getElementById('target').innerHTML += "<p>"+new Date().getHours()+":"+new Date().getMinutes()+" : DEVICE IS NOT TOOGLED ON</p>";
            }, 2000);
            console.log("DEVICE IS NOT TOGGLED ON");//insert fart humor here
        }
    }
}
class Restaurant {
    private _name : string;
    private _cookingDevice : ICanCook;

    constructor(name : string) {
        this._cookingDevice = this.checkDevice(name);
    }
    private checkDevice(name : string) : ICanCook  {
        if (name === "Bakery"){
            return new Oven();
        }else if (name === "Crepery"){
            return new Stove(); 
        }
        return new DefaultDevice();
    }

    public cook(item : string) {
        this._cookingDevice.toggleOnDevice();
        this._cookingDevice.prepare(item);
        this._cookingDevice.toggleOffDevice();
    }
}
let newBakery = new Restaurant("Bakery");
newBakery.cook("cookies");
let crepery = new Restaurant("Crepery");
crepery.cook("crepes");