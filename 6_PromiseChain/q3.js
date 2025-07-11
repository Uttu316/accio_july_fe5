const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
});
p.then((value) => {
  console.log(value);
  return value + 1; // resolved promise
})
  .then((value) => {
    console.log(value);
    throw "oooops"; // rejected promise
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log("Error", err);
  });
