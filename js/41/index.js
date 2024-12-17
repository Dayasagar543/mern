// arthematic operations
let sum = 3 + 4;
console.log("The sum of the values " + sum);
let sub = 3 - 4;
console.log("The difference of the values " + sub);
let mul = 3 * 4;
console.log("The mul of the values  " + mul);
let div = 3 / 4;
console.log("The div  of the values " + div);
let mod = 20 % 3;
console.log("The mod of the values " + mod);
let power = 3 ** 2;
console.log("The power of the values " + power);

// unary operations

//post
let a = 0;
a++;
console.log("the post uniary increment " + a);

a--;
console.log("the post uniary decrement " + a);

//pre

++a;
console.log("the pre uniary increment " + a);

--a;
console.log("the pre uniary decrement " + a);

// comparison

let c = 5,
  b = 7;
console.log(c < b);
console.log(c > b);
console.log(c != b);
console.log(c <= b);
console.log(c >= b);
console.log(c == b);
console.log(c === b);
console.log(c !== b);
console.log(c == !b);

//ternary operator
let age = 22;
let result = age > 18 ? "yes above 18" : "not above 18 or child";
console.log(result);

// logical operator
let k = 25,
  j = 25;
console.log(k === 25 && j === 25);
console.log(k === 25 || j === 23);
console.log(k === 23 || j === 23);
console.log(((k === 23) != j) === 23);

//working with non boolean

console.log(false || 7 || 11 || 1);
console.log(false || (7 && 11) || 1);
console.log((false && 7) || (11 && 1));

// bitwise operator
console.log(6 & 7);
console.log(2 & 5);
console.log(2 | 5);
console.log(~5);
console.log(6 | 7);
console.log(6 >> 1);
console.log(6 << 1);

// conditionals
let age1 = 18;
if (age1 > 18) {
  console.log(" eligible to vote");
} else if (age1 == 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

//swtich
let e = 2;
switch (e) {
  case 1:
    console.log("sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("invalid input");
    break;
}
