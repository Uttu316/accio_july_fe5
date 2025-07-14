// function getData(){
//     return new Promise(()=>{

//     })
// }

async function getData() {
  // return 2 //Promise.resolve(2)
  throw "oops"; // Promise.reject("oops")
}

const p = getData();

p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log("Error", err);
});
