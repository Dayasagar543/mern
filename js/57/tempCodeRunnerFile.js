async function postData() {
  //calling api and using await which makes it async and not let the other step execute till the data is not fetched
  let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({ username: "regex", password: "tree" }),
    headers: "Myheaders",
  });
  let data = await response.json();
  console.log(data);
}
postData();
