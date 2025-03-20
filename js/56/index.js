let first_promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("hail to the king of kings");
    if (resolve) {
      resolve("completed the procedure");
    } else {
      reject("unable to complete the procedure");
    }
  }, 1000);
});

first_promise
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally((message) => {
    console.log("i run at constant either rejected or resolved");
  });
