const p = new Promise((resolve, reject) => {
  //sync
  const num = parseInt(prompt("Enter a number"));
  setTimeout(() => {
    if (num % 2 === 0) {
      resolve("Even");
    } else {
      reject("Odd");
    }
  }, 4000);
});

p.then((value) => {
  console.log(value);
}).catch((e) => {
  console.log(e);
});
