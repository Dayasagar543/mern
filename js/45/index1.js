class swim {
  swim_butterfly() {
    console.log("started the butterfly swimming");
  }
}

const Object = new swim();
Object.swim_butterfly();

// the above code will but the below code will not work as  classes donot support
//hoisting

// const Object = new swim();
// Object.swim_butterfly()

// class swim{

//  swim_butterfly() {
//     console.log("started the butterfly swimming")
//  }
// }

//returning a functions

const laugh = (number) => {
  return (square = (number) => {
    return number * number;
  });
};

let value = laugh();
let result = value(5);
console.log(result);

//functions in arrays
const array = [
  (sum = (a, b) => {
    return a + b;
  }),
  (diff = (a, b) => {
    return a - b;
  }),
  (mul = (a, b) => {
    return a * b;
  }),
  (div = (a, b) => {
    return a / b;
  }),
];

let add = array[0];
let result1 = add(1, 3);
console.log("the sum of the 2 numbers " + result1);

//functions in objects

let car = {
  model: 23453,
  age: 20,
  close: () => {
    console.log("the doors are closing");
  },
  open: () => {
    console.log("the doors are opening");
  },
};


car.close()