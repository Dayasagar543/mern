class Human {
  constructor() {}

  //properties
  age = 21; //public --can be access from out side
  #gender = "male"; //private ---can be only accessed inside the block
  height = 180;
  //behaviours
  eating() {
    console.log("i am eating");
  }
  running() {
    console.log("i am running");
  }
  swimming() {
    console.log("i am swimming");
  }
  dancing() {
    console.log("i am dancing");
  }
  gender(){
    console.log(`i am a ${this.#gender}`)
  }
}

let object = new Human();
object.swimming();
console.log(object.age);
// console.log(object.#gender);
object.gender()
