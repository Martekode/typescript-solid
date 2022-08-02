var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var CookingDevice = /** @class */ (function () {
    function CookingDevice() {
        this._isOn = false;
    }
    return CookingDevice;
}());
var Oven = /** @class */ (function (_super) {
    __extends(Oven, _super);
    function Oven() {
        return _super.call(this) || this;
    }
    Oven.prototype.toggleOnDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE IS TOGGLED ON</p>";
        }, 1000);
        console.log("DEVICE IS TOGGLED ON"); //insert fart humor here
        this._isOn = true;
    };
    Oven.prototype.toggleOffDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE TOGGLED OFF</p><hr>";
        }, 3000);
        console.log("DEVICE TOGGLED OFF"); //insert fart humor here
        this._isOn = false;
    };
    Oven.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Device is not Toggled On</p>";
            }, 2000);
            console.log("there is no gas!"); //insert fart humor here
        }
    };
    return Oven;
}(CookingDevice));
var Stove = /** @class */ (function (_super) {
    __extends(Stove, _super);
    function Stove() {
        return _super.call(this) || this;
    }
    Stove.prototype.toggleOnDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE IS TOGGLED ON</p>";
        }, 1000);
        console.log("DEVICE IS TOGGLED ON"); //insert fart humor here
        this._isOn = true;
    };
    Stove.prototype.toggleOffDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE TOGGLED OFF</p><hr>";
        }, 3000);
        console.log("DEVICE TOGGLED OFF"); //insert fart humor here
        this._isOn = false;
    };
    Stove.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now baking " + item + " !</p>";
            }, 2000);
            console.log("Now baking " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE IS NOT TOOGLED ON</p>";
            }, 2000);
            console.log("DEVICE IS NOT TOGGLED ON"); //insert fart humor here
        }
    };
    return Stove;
}(CookingDevice));
var DefaultDevice = /** @class */ (function (_super) {
    __extends(DefaultDevice, _super);
    function DefaultDevice() {
        return _super.call(this) || this;
    }
    DefaultDevice.prototype.toggleOnDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE IS TOGGLED ON</p>";
        }, 1000);
        console.log("DEVICE IS TOGGLED ON"); //insert fart humor here
        this._isOn = true;
    };
    DefaultDevice.prototype.toggleOffDevice = function () {
        setTimeout(function () {
            document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE TOGGLED OFF</p><hr>";
        }, 3000);
        console.log("DEVICE TOGGLED OFF"); //insert fart humor here
        this._isOn = false;
    };
    DefaultDevice.prototype.bake = function (item) {
        if (this._isOn) {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : Now Preparing " + item + " !</p>";
            }, 2000);
            console.log("Now preparing " + item + "!");
        }
        else {
            setTimeout(function () {
                document.getElementById('target').innerHTML += "<p>" + new Date().getHours() + ":" + new Date().getMinutes() + " : DEVICE IS NOT TOOGLED ON</p>";
            }, 2000);
            console.log("DEVICE IS NOT TOGGLED ON"); //insert fart humor here
        }
    };
    return DefaultDevice;
}(CookingDevice));
var Restaurant = /** @class */ (function () {
    function Restaurant(name) {
        this._cookingDevice = this.checkDevice(name);
    }
    Restaurant.prototype.checkDevice = function (name) {
        if (name === "Bakery") {
            return new Oven();
        }
        else if (name === "Crepery") {
            return new Stove();
        }
        return new DefaultDevice();
    };
    Restaurant.prototype.cook = function (item) {
        this._cookingDevice.toggleOnDevice();
        this._cookingDevice.bake(item);
        this._cookingDevice.toggleOffDevice();
    };
    return Restaurant;
}());
var bakery = new Restaurant("Bakery");
bakery.cook("cookies");
var crepery = new Restaurant("Crepery");
crepery.cook("crepes");
