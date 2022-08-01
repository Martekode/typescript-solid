# Interface segregation principle

"Many client-specific interfaces are better than one general-purpose interface."

Interfaces are really good, but like with everything that is good you can go overboard. It is really important that when we create interfaces that are precise and modular.
Almost all languages support adding multiple interfaces to the same class, this in contrast to extending a class, where only a few languages (eg. c++) allow multiple inheritance.
This allows us to create a lot of small, granular interfaces that then allows us to reuse interfaces to multiple different classes.

As a rule of thumb, her is an easy rule: **If at any point you are writing 'this function is not supported' in a class to adhere to an interface, your interface is to big.**

The problem of these big interfaces is sometimes called a \*_Fat Interface_. A fat interface violates Single Responsibility Principle too as it’s handling more than one responsibilities at a time.

Let us think of an example, for example, let us think back of an animal example, look at the following code:

```typescript
interface BirdInterface {
  laysEgg();
  makeSound();
  fly();
  getFlySpeed();
}
class Parrot implements BirdInterface {}
```

This works great, but what happens when we want to make a penguin? Those cute creatures cannot fly! So let us move the _fly()_ to a separate interface:

```typescript
interface BirdInterface {
  laysEgg();
  makeSound();
}
interface CanFly {
  fly();
  getFlySpeed();
}
```

### Exercise: step 1

Go into [old.ts](old.ts) and look at the 2 different users. They have a couple of authentication methods but like you can see, Admin users can only login with a password, not with facebook or google because of security reasons.
Refactor the current fat interface so each auth method has each own interface.
As an extra difficulty, there is a feature request for a google bot to be able to login on the site, he can only use the google option to log in. Can you make this extra class?

### Exercise: Step 2 (Optional)

You might notice that both the Google and Facebook code is almost identical, could you maybe refactor this code to small, separate dependencies?

# solution:

## step one:

```typescript
interface iUserAuth {
  checkPassword(password: string): boolean;
  resetPassword();
}
interface iGoogleAuth {
  setGoogleToken(token: string);
  checkGoogleLogin(token: string): boolean;
}
interface iFacebookAuth {
  setFacebookToken(token: string);
  getFacebookLogin(token: string): boolean;
}
```

seperated the interfaces accordingly

## step two:

```typescript
class Admin implements iUserAuth {
  private _password: string = "admin";

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt("What is your new password?");
  }
}
```

created admin class that only implements what it needs

## step three:

```typescript
class User extends TokenInit implements iUserAuth, iFacebookAuth, iGoogleAuth {
  private _password: string = "user";

  checkGoogleLogin(token) {
    // return "this will not work";
    // hier gebeurd specifieke logica
    return token === this.token;
  }

  setGoogleToken(token: string) {
    // hier gebeurd rare google token validatie
    this.setToken(token);
  }

  getFacebookLogin(token) {
    // hier gebeurd specifieke logica
    return token === this.token;
  }

  setFacebookToken(token: string) {
    // hier gebeurd rare facebook token validatie
    this.setToken(token);
  }

  checkPassword(password: string): boolean {
    return password === this._password;
  }

  resetPassword() {
    this._password = prompt("What is your new password?");
  }
}
```

user class is the most beefy sinds it needs to be abale to have multiple logins

## step four:

```typescript
class TokenInit {
  private _token: string;

  protected get token(): string {
    return this._token;
  }

  protected setToken(token: string) {
    this._token = token;
  }
}
```

this is the extention, we figured sinds the google and facebok do similar thing and have the same code. we refactored it so it would serve both purposes.
