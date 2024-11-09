let person = {
  name: "saim",
  age: 20,
  status: "single",
};

class PersonInfo {
  constructor(name, age, status) {
    this.name = name;
    this.age = age;
    this.status = status;
  }
}

let PersonInfo_Object = new PersonInfo("saim", 20, "single");
console.log(person);
// console.log(PersonInfo)
console.log(PersonInfo_Object);

// Classes
//  You may wonder, if classes do the exact same thing as simply defining an object, why do we even need classes? The answer is that classes are essentially blueprints for object creation. This means that we need to do much less typing if we need to create 20 dogs when we have a dog class. If we have to create the objects, we will have to specify all the properties' names each time. And it would be easy to make a typo and misspell a property name. Classes come in handy in these sorts of situations.

// PROBLEMS
// Q1 Ans:
class MyFriend {
  constructor(firstname, secondname) {
    this.firstname = firstname;
    this.secondname = secondname;
  }

  greet() {
    console.log(`Hello Welcome`, this.firstname + this.secondname);
  }
  // can also add a metoad which need parameter

  message(emotion) {
    return console.log("are you " + emotion);
  }
}

let imami = new MyFriend("hussain", "imami");
imami.greet();
imami.message("happy");
let sher = new MyFriend("sher", "alam");
sher.greet();
sher.message("sad");

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    if (firstname.startsWith("M")) {
      this.#firstname = firstname;
    } else {
      this.#firstname = "M" + firstname;
    }
    this.#lastname = lastname;
  }
}
// Now when you try to create a person that has a firstname value that doesn't start with an "M," it will add an M in front. So for example, the value of the following first name is Mkay:

let p = new Person("kay", "Moon"); 
console.log(p)