// Getters and setters are special properties that we can use to get data from a class and to set data fields on the class. Getters and setters are computed properties. So, they are more like properties than they are like functions. We call them accessors. They do look a bit like functions, because they have () behind them, but they are not!

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
  get firstname() {
    return this.#firstname;
  }
  set firstname(firstname) {
    if (this.firstname.startsWith("M")) {
      this.#firstname = firstname;
    } else {
      this.#firstname = "M" + firstname;
    }
  }
  get lastname() {
    return this.#lastname;
  }
  set lastname(lastname) {
    this.#lastname = lastname;
  }
 
}

// The getter is used to get the property. Therefore, it doesn't take any parameters, but simply returns the property. The setter is the other way around: it takes a parameter, assigns this new value to the property, and returns nothing. The setter can contain more logic, for example, some validation, as we'll see below. The getter can be used outside the object as if it were a property. The properties are no longer directly accessible from outside the class, but can be accessed via the getter to get the value and via the setter to update the value. Here is how to use it outside the class instance:

let p = new Person("aria", "Saga");
console.log(p.firstname);
