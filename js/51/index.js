let p3 = document.getElementById("tpara");
// let Body = document.querySelector("body")
let Body = document.querySelector("body");
let heading1 = document.querySelector("h1");

p3.style.color = "red";
p3.style.backgroundImage =
  "linear-gradient(to right, #6a11cb 0%, #2575fc 100%)";

// logging the data to console
let data = p3.textContent;
console.log(data);

// inserting the child element
let heading2 = document.createElement("h2");
heading2.innerHTML = "this is the second heading";
Body.appendChild(heading2);

//inserting child element using inset adjacent element

let heading3 = document.createElement("h3");
heading3.innerHTML = "This is form Dayasagar";
heading1.insertAdjacentElement("afterend", heading3);
// heading1.insertAdjacentElement("beforeend", heading3);
heading3.style.color = "purple";
heading3.style.fontSize = "25px";
heading3.style.margin = "5px";
heading3.style.width = "100%";
heading3.style.height = "25vh";
heading3.style.textAlign = "center";
heading3.style.alignContent = "center";

heading3.style.backgroundImage =
  " linear-gradient(to top, #37ecba 0%, #72afd3 100%)";

let parentb=heading2.parentElement
console.log(parent)

let  parenth=heading3.parentElement
console.log(parenth)



  Body.removeChild(heading2);
