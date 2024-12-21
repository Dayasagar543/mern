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

function print_values_zero(num) {
  if (num == 0) {
    return 0;
  }
  console.log(num);
  return print_values_zero(num - 1);
}

print_values_zero(52);

let array = [1, 2, 3, 4, 5];

const mul = (array) => {
  if (array.length <= 0) {
    return 1;
  } else return array[array.length - 1] * mul(array.slice(0, array.length - 1));
};

let result1 = mul(array);
console.log(result1)
