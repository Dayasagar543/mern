function print_values_zero(num){
  if(num==0){
    return 0;
  }
  console.log(num)
  return print_values_zero(num-1);
}

print_values_zero(52);