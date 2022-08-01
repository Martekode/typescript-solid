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
class User implements iUserAuth, iFacebookAuth, iGoogleAuth {
    private _password : string = 'user';
    private _facebookToken : string;
    private _googleToken : string;

    checkGoogleLogin(token) {
        // return "this will not work";
        return (token === this._googleToken);
    }

    setGoogleToken(token : string) {
        this._googleToken = token;
    }

    getFacebookLogin(token) {
        return (token === this._facebookToken);
    }

    setFacebookToken(token : string) {
        this._facebookToken = token;
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