const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 3000);
});
p.then((value) => {
  console.log(value);
  return value + 1;
})
  .then((value) => {
    console.log(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
