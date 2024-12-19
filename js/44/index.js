// const power = (value, exponent) => {
//   let result = 1;
//   for (let i = 1; i <=exponent; i++) {
//    result=result*value
//   }
//   return result;
// };

//recursion

function power(value, exponent) {
  if (exponent === 0) {
    return true;
  }
  return value * power(value, exponent - 1);
}

let data = power(2, 2);
console.log(data);

function factorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorial(num - 1);
}

let value = factorial(5);
console.log(value);

function sum_all_of_preceeding(num) {
  if (num === 1) {
    return 1;
  }
  return num + sum_all_of_preceeding(num - 1);
}

let result = sum_all_of_preceeding(10);
console.log(result);
