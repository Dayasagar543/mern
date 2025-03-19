// code1
let t1 = performance.now();
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = "hi there from india";
  document.body.appendChild(para);
}
let t2 = performance.now();
console.log("the time is" + (t2 - t1));

// code2
let t3 = performance.now();
let mydiv = document.createElement("div");
for (let i = 0; i < 100; i++) {
  let para = document.createElement("p");
  para.textContent = "The code is running";
  mydiv.appendChild(para);
}
document.body.appendChild(mydiv);
let t4 = performance.now();
console.log("the time is" + (t4 - t3));

// document fragment <--------- best practice for rendering the ui the cotent dynamically
// fragement light weight document for appending the divs

let fragment = document.createDocumentFragment();
for (let i = 0; i <= 1000; i++) {
  let para = document.createElement("p");
  para.textContent = "YHWH the king of kings ";
  // no reflows(costly) and no repaint(very less costly still not to be used)
  fragment.appendChild(para);
}
//one reflow and one repaint
document.body.appendChild(fragment);
