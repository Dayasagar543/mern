//global scope avoid global declartion majorly
var age = 15;
let name = "sundharam";
let last_name = "gyara";

console.log(age);

{
  console.log(age);
}

if (true) {
  console.log(age);
}

for (let i = 0; i <= 3; i++) {
  console.log(age);
}


const flow=()=>{
    console.log(age)
}

flow()
function flow1(){
    console.log(age)
}

flow1()