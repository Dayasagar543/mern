data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("printing using for loop");
//for loop
for (let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

console.log("printing using while loop");
//while loop
let i = 0;
while (i < data.length) {
  if (i === 5) {
    break;
  }
  console.log(data[i]);
  i++;
}

console.log(" printing using for each loop ");
//for each
data.forEach((element) => {
  console.log(element);
});

data1 = [2, 3];
//reduce
let sum = data1.reduce((a, e) => (a += e));
console.log(sum);

// printing 2d array
const print2DArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      console.log(array[i][j]);
    }
  }
};

// let arrayToBeRotated = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// print2DArray(arrayToBeRotated);

// let roatatedArray = [];

// //transpose of an array

// const rotateArray = (arrayToBeRotated, roatatedArray) => {
//   let i = 0;
//   roatatedArray[arrayToBeRotated.length][arrayToBeRotated[0].length];
//   for (let i = 0; i < arrayToBeRotated.length; i++) {
//     for (let j = 0; j < arrayToBeRotated[i].length; j++) {
//       roatatedArray[i][j] = arrayToBeRotated[j][i];
//     }
//   }
// };

rotateArray(arrayToBeRotated, roatatedArray);
print2DArray(roatatedArray);

//string
let name1 = "vidyasagar";

let previousContext = "my name is ";

console.log(`my brother name is  ${name1}`);

console.log(previousContext + name1);

let sentence = 'do \\ you love the lord \\"can you read"\\ the data';

console.log('hi there how a "you"hello"there"can you read it. ');
console.log(sentence);

let words=sentence.split('\\')
console.log(words)

let sentence2=words.join('*');
console.log(sentence2)
