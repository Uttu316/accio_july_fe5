console.log("A");
const getPost = async () => {
  console.log("B");
  return {
    caption: "Hola!",
  };
};

console.log("C");

getPost()
  .then((value) => {
    console.log(value);
  })
  .catch((e) => {
    console.log("err", e);
  });
console.log("D");
