// //global scope avoid global declartion majorly
// var age = 15;
// let name = "sundharam";
// let last_name = "gyara";

// console.log(age);

// {
//   console.log(age);
// }

// if (true) {
//   console.log(age);
// }

// for (let i = 0; i <= 3; i++) {
//   console.log(age);
// }

// const flow=()=>{
//     console.log(age)
// }

// flow()
// function flow1(){
//     console.log(age)
// }

// flow1()

//function scoping
function sayhi() {
  var planet = "earth";
  console.log("say hi", planet);
}

sayhi();

// console.log(planet)

//block scope

{
  var height = 5.4;
  const age = 25;
  let intrest = "music";
  console.log(age);
  console.log(intrest);
}
console.log(height);
// // console.log(age)
// console.log(intrest)

// var  will over ride the  blockscope

//temporal dead zone

// console.log(marks)
// console.log("raviender")
// console.log("sunday")

// the lines above this will be in tmeporal dead zone cause
// marks cannot acces the value as its not hoiseted as var ,but declared
// by let and const so the below will not run and the process or control
// donot move further

const marks = 100;
console.log(marks);
