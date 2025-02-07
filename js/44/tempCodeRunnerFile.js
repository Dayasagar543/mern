function power(value, exponent) {
  if (exponent === 0) {
    return true;
  }
  return value * power(value, exponent - 1);
}

let data = power(2, 2);
let data1 = power(2, 3);
console.log(data);
console.log(data1);