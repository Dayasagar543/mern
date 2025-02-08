let nums1=[1,2,3,4,5]
const sum_array=(array)=>{
 let sum=0;
 array.forEach(element => {
  sum+=element;
 });
 return sum;
}

console.log(sum_array(nums1))
