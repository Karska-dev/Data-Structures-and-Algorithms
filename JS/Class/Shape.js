/* Syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
  }
} */

"use strict";
//abstract class
class Shape {
  constructor(sides = []) {
    this.sides = sides;
  }
  getSideSizes() {
    return this.sides;
  }
  getSidesAmount() {
    return this.sides.length;
  }

}

/* To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class: */

/* The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods. */

/* Classes also allows you to use getters and setters.

It can be smart to use getters and setters for your properties, especially if you want to do something special with the value before returning them, or before you set them.

To add getters and setters in the class, use the get and set keywords.

even if the getter is a method, you do not use parentheses when you want to get the property value.

The name of the getter/setter method cannot be the same as the name of the property

Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property
*/

/* Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.

class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.
*/