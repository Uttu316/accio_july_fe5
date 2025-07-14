// import { B_y } from "./b.js";

console.log("File A", "Rahul is working");
export var x = 10;

// console.log(B_y);

const sayHello = () => {
  return "hello";
};

//named export
export const APP_NAME = "Rock";

export const sayBye = () => {
  return "bye";
};

const runApp = (text) => {
  const el = document.createElement("h4");
  el.innerText = text;
  document.body.append(el);
};
export default runApp;
