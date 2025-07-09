const print = (operation, x, y) => {
  let ans = operation(x, y);

  console.log("Output is:", ans);
};

const sum = (x, y) => {
  return x + y;
};
const mul = (x, y) => {
  return x * y;
};

print(sum, 2, 3);
print(mul, 4, 5);
