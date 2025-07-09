console.log("A");

let x = 0;
setTimeout(() => {
  let x = 2;
  console.log("B", x);
}, 2000);
x++;
console.log("C");
