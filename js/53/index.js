let pane = document.getElementById("container");
let button = document.getElementById("button");
let header_anchor = document.getElementById("header_anchor");
let anchors = document.querySelectorAll("a");
let anchor_div = document.getElementById("anchors");

const over = () => {
  button.style.cssText = "color:#673c9e;font-weight:100;";
  pane.style.backgroundImage =
    "linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)";
  button.style.backgroundImage =
    " linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)";
};

const out = () => {
  button.style.cssText = "color:black;font-weight:900;";
  pane.style.backgroundImage =
    "linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)";
  button.style.backgroundImage =
    "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)";
};

pane.addEventListener("mouseover", over);

pane.addEventListener("mouseout", out);

const clicking = (event) => {
  console.log(event);
  //   console.log("clicked");
  pane.style.backgroundImage =
    "linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)";
};

button.addEventListener("click", clicking);

// const anchor = (event) => {
//   event.preventDefault();
//   //   header_anchor.textContent = "clicked me";
//   alert("you have clicked:" + event.target.textContent);
// };

// header_anchor.addEventListener("click", anchor);

// avoiding too many listeners
const multiple_anchors = (event) => {
  event.preventDefault();
  if (event.target.nodeName === "SPAN") {
    alert("you have clicked" + event.target.textContent);
  }
};

// for (let i = 0; i < anchors.length; i++) {
//   let an = anchors[i];
//   an.addEventListener("click", multiple_anchors);
// }

//holding or the root node or above node for event listening
anchor_div.addEventListener("click", multiple_anchors);
// removing the listeners

pane.removeEventListener(over);
pane.removeEventListener(out);
