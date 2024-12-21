let array = [1, 2, 3, 4, 5];

const mul = (array) => {
  if (array.length <= 0) {
    return 1;
  } else return array[array.length - 1] * mul(array.slice(0, array.length - 1));
};

let result1 = mul(array);
console.log(result1)