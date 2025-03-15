// getting and setting the attribute of the document.

let container = document.getElementById("container");
container.style.color = "red";
container.style.width = "50%";
container.style.backgroundColor = "blue";
container.style.height = "70vh";
container.classList.toggle("div_container");
// container.classList.toggle("div_container");

let first_para = document.getElementById("first_para");
first_para.style.padding = "40px";
first_para.style.backgroundColor = "yellow";
first_para.style.margin = "50px";
first_para.style.color = "black";

let second_div = document.getElementById("second_div");
second_div.style.padding = "40px";
second_div.style.backgroundColor = "pink";
second_div.style.margin = "50px";
second_div.style.color = "white";

let second_para = document.getElementById("second_para");
second_para.style.padding = "40px";
second_para.style.backgroundColor = "black";
second_para.style.margin = "50px";
second_para.style.cssText =
  "background-color:purple;color:white;padding:0.5rem;margin:2.5rem";
second_para.setAttribute("class", "secondpara");
second_para.setAttribute(
  "style",
  "padding:2rem;color:purple;background-color:yellow"
);
// let secondpara = document.getElementsByClassName(secondpara);
// secondpara.style.color = "blue";
// let value = second_para.getAttribute("class");
// console.log(value);
