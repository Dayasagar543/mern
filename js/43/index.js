console.log(" Hi there from functions ");

//functions
function run(data) {
  for (let i = 0; i <= data; i++) {
    console.log("hi from runs  "+ i);
  }
}

run(100);


//arrow functions
const value = () => {
  console.log("surendharan");
};

value();

//functions with variables assigned
let data=function(){
  console.log("rendering")
}

data()