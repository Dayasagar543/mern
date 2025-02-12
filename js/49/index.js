//objects are called dynamic because we can change
//  their properties at runtime
let object4 = {
  age: 12,
  wt: 68,
  ht: 180,
  name: "love",
};

console.log(object4);
object4.color = "white";
console.log(object4);

let object2 = { ...object4 };

//object cloning methods below
//1.spread operator  ...

console.log("the cloned object");
console.log(object2);
object2.age=21;
object2.wt=45;
object2.ht=190;
object2.gender="male";


console.log("the manipulated  object2");
console.log(object2);


// 2.assign method using Object
let object3=Object.assign({},object4,object2)
console.log(object3)
object3.age=45
console.log(object3)

//using iteration

let object5={}

for(let key in object2){
    let newKey=key;
    let newValue=object2[key];
    object5[newKey]=newValue
}

console.log("the cloned using the iterations")
console.log(object5)