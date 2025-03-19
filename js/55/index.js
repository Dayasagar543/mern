// synchronous
const sayhi = () => {
  console.log("hi there how are you doing");
};
sayhi();

// asynchronous
const say_hello = () => {
    let fragment = document.createDocumentFragment();
  for (let i = 0; i < 100; i++) {
    let paragraph = document.createElement("p");
    paragraph.textContent = "hellow there";
    fragment.appendChild(paragraph)
  }
  setTimeout(() => {
    document.body.appendChild(fragment);
  },500);
};
say_hello();
