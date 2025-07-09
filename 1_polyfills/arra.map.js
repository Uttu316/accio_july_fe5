Array.prototype.map = null;
// polyfills

let arr1 = [2, 3, 1, 6, 4, 8, 7];

// polyfill for map
if (!Array.prototype.map) {
  Array.prototype.map = function (callbackFn) {
    let array = this;
    let output = [];
    for (let i = 0; i < array.length; i++) {
      let curr = callbackFn(array[i], i, array);
      output.push(curr);
    }
    return output;
  };
}

const res = arr1.map((item, index, array) => {
  return item + index;
});

console.log(res);
