const e = require("express");

//default parameters
function sayName(myName = "love") {
  console.log("My name is :", myName);
}

// sayName("yeshuva")
sayName();

//multiple parameters
function say(myName = "love", gender = "male") {
  console.log("My name is :", myName, "and I am a", gender);
}

// sayName("yeshuva")
say();

//dependent parameters

function dependent_values(name = "love", lowercaseName = name.toUpperCase()) {
  console.log(name, lowercaseName);
}

dependent_values();

//objects passing
function objects_values(values = { age: 21, height: 190 }) {
  console.log(values.age);
  console.log(values.height);
}

objects_values();

//passing arrays
function array_values(values = ["rahul", "sunder", "pichai"]) {
  values.forEach((e) => {
    console.log(e);
  });
}

array_values();

//passing function as the parter to another function

let swim = () => {
  return "swimming";
};
function run(fun = swim()) {
  console.log(fun);
}

run();
