const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("A");
  }, 2000);
}); //2000-A-R

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 3000);
}); //3000-B-r
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("C");
  }, 4500);
}); //4500-C-r

const p = Promise.race([p1, p2, p3]); // anyone get settle first

p.then((res) => {
  console.log(res);
}).catch((err) => {
  console.log(err);
});
