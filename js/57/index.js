//async
// async function run() {
//  setTimeout(()=>{
//     console.log("runnings")
//  },2000)
// }

// run()

// await

// fetch API
const myHeaders = new Headers(); //steps are mandatory
myHeaders.append("Content-Type", "application/json");//steps are mandatory
let url = "https://jsonplaceholder.typicode.com/posts";
const data = {
  method: "POST",
  body: JSON.stringify({ username: "regex", pass: "tree" }),
  headers: myHeaders,
};

async function getData() {
  //calling api and using await which makes it async and not let the other step execute till the data is not fetched
  let response = await fetch(url);
  let data_recevied = await response.json();
  console.log("response for the get method", data_recevied);
}

async function postData(data) {
  //calling api and using await which makes it async and not let the other step execute till the data is not fetched
  let response = await fetch(url, data);
  let data_recevied = await response.json();
  console.log("the data response on post:", data_recevied, response.status);
}

async function procesData() {
  await getData();
  await postData(data);
}

procesData();
