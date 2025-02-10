
// function is hoisted on top so that it will be accessed while executing
//the code so the functins run properly


run("hi there hellow");

function run(mesage){
    console.log(mesage)
}


//var declartions hoisting is done but the value is not taken up to the top
//so the data is not output or shows undefined
console.log(data)

var data=23;



//let and const donot work the same way they are strict vaiables once declared 
//they need to called afer their assignment.
console.log(data1)

let data1=23;

console.log(data2)

const data2=23;
