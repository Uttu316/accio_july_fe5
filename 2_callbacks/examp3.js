console.log("A");

let x = 0;
setTimeout(() => {
  console.log("B", x);
}, 2000);
x++;
console.log("C");
