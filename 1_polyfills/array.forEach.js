Array.prototype.forEach = null;
// polyfills

let arr1 = [2, 3, 1, 6, 4, 8, 7];
let arr2 = [7, 44, 9, 1, 0, 3, 22];

// polyfill for forEach
if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callbackFn) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
      callbackFn(arr[i], i, arr);
    }
  };
}

arr1.forEach((item, index, array) => {
  console.log(item, index);
});
