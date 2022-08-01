interface iUserAuth {
    checkPassword(password: string) : boolean;
    resetPassword();
}
interface iGoogleAuth{
    setGoogleToken(token : string);
    checkGoogleLogin(token : string) : boolean;
}
interface iFacebookAuth{
    setFacebookToken(token : string);
    getFacebookLogin(token : string) : boolean;
}

class TokenInit {
    private _token:string;

    protected get token():string{
        return this._token;
    }

    protected  setToken(token:string){
        this._token = token;
    }
}
class User extends TokenInit implements iUserAuth, iFacebookAuth, iGoogleAuth {
    private _password : string = 'user';


    checkGoogleLogin(token : string) : boolean{
        // return "this will not work";
        // hier gebeurd specifieke logica
        return (token === this.token);
    }

    setGoogleToken(token : string) {
        // hier gebeurd rare google token validatie
        this.setToken(token);
    }

    getFacebookLogin(token : string) : boolean{
        // hier gebeurd specifieke logica
        return (token === this.token);
    }

    setFacebookToken(token : string) {
        // hier gebeurd rare facebook token validatie
        this.setToken(token);
    }

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
class Admin implements iUserAuth{
    private _password : string = "admin";

    checkPassword(password: string) : boolean {
        return (password === this._password);
    }

    resetPassword() {
        this._password = prompt('What is your new password?');
    }
}
class GoogleBot extends TokenInit implements iGoogleAuth{
    checkGoogleLogin(token : string) {
        // return "this will not work";
        // hier gebeurd specifieke logica
        return (token === this.token);
    }

    setGoogleToken(token : string) {
        // hier gebeurd rare google token validatie
        this.setToken(token);
    }
}