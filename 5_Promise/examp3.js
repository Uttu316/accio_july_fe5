console.log("A");
const getSum = (x, y) => {
  console.log("B");
  return new Promise((resolve, reject) => {
    console.log("C");
    setTimeout(() => {
      console.log("D");
      if (x > y) {
        resolve(x + y);
      } else {
        reject("Oops");
      }
      console.log("E");
    }, 3000);
    console.log("F");
  });
};

console.log("G");
getSum(4, 3)
  .then((value) => {
    console.log("Sum:", value);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Done");
  });
console.log("H");
