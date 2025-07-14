const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
}); //2000-A-R

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("B");
  }, 3000);
}); //3000-B-R
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 1500);
}); //1500-C-r

const p = Promise.allSettled([p1, p2, p3]);

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
