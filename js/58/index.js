// function is bound with its required data and accessed through its reference
let name = "vidyasagar";

function outerfunction() {
  let name = "rajesh";
  function inner_function() {
    name = "sumanth";
    console.log(name);
  }
  inner_function();
}
outerfunction();

//closure usage what ever the inner function is will be always bound with
// its outer or lexical envirnoment----------below is the example

function run() {
  let name = "rahul";
  function laugh() {
    console.log(name + "rahul is laughing");
  }
  return laugh;
}

let result = run();
console.log(result());
