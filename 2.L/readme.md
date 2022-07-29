# Liskov substitution principle

"Objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program." See also [design by contract](https://en.wikipedia.org/wiki/Design_by_contract).

### Polymorphism

You might already be aware of Polymorphism, but just to remind you, here is the short summary:
If 2 different classes use **the same interface**, so they have the same function names: the code that uses this class does not care about which one class it receives.
In short: When two objects have the same interface, they are functionally interchangeable = polymorphism.

## Your mission

Look at the old.ts file and open the index.html file, refactor the Discount class in 3 different classes with the same interface "VariableDiscount" & "FixedDiscount" & "NoDiscount"

### Discuss

Do you understand what the use is of having the class NoDiscount? This prevents us from having to write extra if-statements inside product to check if we actually have a Discount dependency. It might look strange but these null or void classes are very common in a lot of popular libraries!

# solution

```ts
//created an interface to pass the required methods to the classes
//that all uses them
interface iHaveDiscountCalculations {
  apply(price: number): number;
  showCalculation(price: number): string;
}
//created a parent class to extend the parameters from and likewise
//for the constructor
class Discount {
  protected _value: number;
  constructor(value: number) {
    this._value = value;
  }
}
//actual creation of the classes:

//variable: extends from discount and implements the ihavediscountcalculations
//we don't need _type anymore because we declare it in the name of the class
//we use the super to use the parent constructor
//no if statements needed anymore because the typing is already known
class VariableDiscount extends Discount implements iHaveDiscountCalculations {
  constructor(value: number) {
    super(value);
  }
  public apply(price: number): number {
    return price - (price * this._value) / 100;
  }
  public showCalculation(price: number): string {
    return price + " € -  " + this._value + "%";
  }
}
// same logic as the variableDiscount above
class FixedDiscount extends Discount implements iHaveDiscountCalculations {
  constructor(value: number) {
    super(value);
  }
  public apply(price: number): number {
    return Math.max(0, price - this._value);
  }
  public showCalculation(price: number): string {
    return price + "€ -  " + this._value + "€ (min 0 €)";
  }
}
// the noDiscount class needs not params so no extention, it does however
// need to spit out some info regardin the value of this discount, which is none
// so just return price and return string "no discount".
// no constructor needed sinds we have no properties.
class NoDiscount implements iHaveDiscountCalculations {
  public apply(price: number): number {
    return price;
  }
  public showCalculation(price: number): string {
    return "No discount";
  }
}
```
