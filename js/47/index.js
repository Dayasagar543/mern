class Human {
  //properties
  age = 21; //public --can be access from out side
  #gender = "male"; //private ---can be only accessed inside the block
  height = 180;
  constructor(new_age, new_height) {
    this.age = new_age;
    this.height = new_height;
  }
  //behaviours
  get fetch_gender() {
    return this.#gender;
  }

  set modify_gender(value) {
    this.gender = value;
  }

  eating() {
    console.log("i am eating");
  }
  running() {
    console.log("i am running");
  }
  swimming() {
    console.log("i am swimming");
  }
  #dancing() {
    //adding the # would help you to privatise the methods in js or variables in js
    console.log("i am dancing");
  }
  gender() {
    console.log(`i am a ${this.#gender}`);
  }
}

let object = new Human(24, 154);
object.swimming();
console.log(object.age);
// console.log(object.#gender);
object.gender();
console.log(object.fetch_gender);
