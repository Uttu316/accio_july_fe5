// polyfills

let arr1 = [2, 3, 1, 6, 4, 8, 7];
let arr2 = [7, 44, 9, 1, 0, 3, 22];

// polyfill for odds
Array.prototype.odds = function () {
  //need the current array
  const array = this;
  let output = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      //even
      output.push(array[i]);
    }
  }

  return output;
};

let o1 = arr1.odds();
console.log(o1);

let o2 = arr2.odds();
console.log(o2);
