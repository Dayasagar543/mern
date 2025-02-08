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
let data1 = power(2, 3);
console.log(data);
console.log(data1);

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


// object literal
let data_person={
  name:"rahul",
  age:21,
  gernder:"male",
  email:"rahul123@gmail.com",
  greet:()=>{
    console.log("hail yeshuva")
  }
}

for(let key in data_person){
  console.log(key," ",data_person[key])
}

console.log(data_person)
console.log(data_person.greet())

// array literal
let array2=[1,2,3,4,5,6,7,8]
console.log(array2)


// array data

let array3=new Array("rahul","sumanth",1,45,23,4,5,6,4)
console.log(array3)

console.log(typeof(array2))
console.log(typeof(array3))

array3.pop()
array3.push(24)
array3.shift()
console.log(array3)
array3.unshift(5)
sliced_data=array3.slice(2,5)
console.log(array3)
console.log(sliced_data)

//array splice method

array3.splice(3,2,"Hema")  // splice(where to start, how many ele rm,what to insert once removed )
console.log(array3)

let values=array3.map((ele,value)=>{
return ele*ele
})

console.log(values)

let arr=[10,2,3,4,5,6,7,8,9,12,1,15,12,1,6]

let even_values=arr.filter((ele)=>{
 return ele%2===0?true:false
})

console.log(even_values)

//string extraction using filter
let arr1=[10,2,3,4,5,6,7,8,9,12,1,15,12,1,6,"rahul","somesh","rajesah"]

let strings1=arr1.filter((ele)=>{
 return typeof(ele)==='string'?true:false
})

console.log(strings1)

//number extraction using filter

let arr2=[10,2,3,4,5,6,7,8,9,12,1,15,12,1,6,"rahul","somesh","rajesah"]
let numbers=arr2.filter((ele)=>{
 return typeof(ele)==='number'?true:false
})

console.log(numbers)

let red_value=numbers.reduce((acc,cur)=>{
  console.log(acc+" "+cur)
  
  return acc+=cur
},0)

console.log("reduced values "+red_value)

let sorted_values_ascending=numbers.sort((a,b)=> a-b);
console.log(sorted_values_ascending)
let sorted_values_decending=numbers.sort((a,b)=> b-a);
console.log(sorted_values_decending)

let index_of=numbers.indexOf(15)
console.log(index_of)


//for each

numbers.forEach((value,index)=>{
  console.log("numbers: ",value,"Index: ", index);
})

//for in 

let name_person="sundharam"
for(let letter in name_person){
  console.log(name_person[letter])
}

let nums1=[1,2,3,4,5]
const sum_array=(array)=>{
 let sum=0;
 array.forEach(element => {
  sum+=element;
 });
 return sum;
}

console.log(sum_array(nums1))





