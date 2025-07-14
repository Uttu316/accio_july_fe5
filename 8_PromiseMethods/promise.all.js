const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
}); //2000-A

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 3000);
}); //3000-B
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 1500);
}); //1500-C

const p = Promise.all([p1, p2, p3]);

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
