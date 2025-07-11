const getSum = (x, y) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (x > y) {
        resolve(x + y);
      } else {
        reject("Oops");
      }
    }, 3000);
  });
};

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
