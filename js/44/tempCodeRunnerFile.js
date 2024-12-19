function sum_all_of_preceeding(num){
    if(num===1){
        return 1
    }
return num+sum_all_of_preceeding(num-1)
}

let result =sum_all_of_preceeding(10)
console.log(result)