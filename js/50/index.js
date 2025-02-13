// error handling --------distrupts the normal flow of the program

//1. complie time errors  ----parsing
//syntax erro
// console.log(2;

//2.run time errors ----while prgram or code runs or executes
// ReferenceError
// console.log(x); // x is undefined

// Handling errors
try {
  let x = 23;
  console.log(x);
} catch (e) {
  // console.log("unable to get the reference of the x")
  //   console.error("unable to get the reference",e)
  // console.warn("unable to get the reference");
} finally {
  // console.log("ran the code ")
  console.log("I will run every time as am finally block ");
}

try {
//   let x = 23;
  console.log(x);
} catch (e) {
  // console.log("unable to get the reference of the x")
  //   console.error("unable to get the reference",e)
  // console.warn("unable to get the reference");
  throw new Error("initialize the value dear first then you can move a head with you work")
} finally {
  // console.log("ran the code ")
  console.log("I will run every time as am finally block ");
}
