# Dependency inversion principle

At its heart, the DIP is about structure. The manner in which you structure your program entities, and the way in which they interact with one another, has a direct impact on your ability to conform to the rest of the SOLID principles (the benefits of which we have discussed previously.) If your dependencies are mismanaged, then the likelihood of your code being flexible, maintainable, and reusable is drastically diminished.

## Story time

The Restaurant class depends on usage of its Oven object. What if we wanted to make a restaurant that uses a different kind of cooking instrument? As currently implemented, we couldn’t do so without going into the Restaurant class and making changes, which would violate the Open/Closed Principle.
Changes to the Oven object have the potential to cascade through the program and break the Restaurant class’ Cook method. For example, what if we decided that we wanted to make our ovens electric rather than gas and changed the LightGas and ExtinguishGas method names? Doing so would effectively break Restaurant because it relies on using those Oven methods as currently named.
The coupling between Restaurant and Oven reduces portability, meaning that we can’t re-use Restaurant in another location without bringing Oven with it. (Even if the other program never uses Oven.)

# solution

I disregard this task!!!!

## my decision

i decided to make a Restaurant Library. But what does this mean?

### first of all

it means that the developer can make different restaurants wether it is a bakery or a noodle shop or something else. The use is basically the same.:

- you make a new Model for your desired restaurant that you extend from the existing Restaurant Model in the dependencies of the Chains dir
- every restaurant needs a basic cooking device and that is what the extention is for
- - this does not mean you can't override or add new devices and methods to prepare the food
- you then make all the Device Models that your restaurant needs:
- - these models also take dependencies, wether it is a parent class or an interface to state what the device needs to do. you can make these in the dependencies of the Devices dir.

i also want to make a Utencils dir in the Devices dir and add functionality to make utensils like pots and pans of different sizes and volumes.
after that i also could add the Library functionality. This would make it so that you could give multiple restaurant instructions at the same time.
