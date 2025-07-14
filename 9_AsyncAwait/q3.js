const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("API Success");
    }, 4000);
  });
};

const getData = async () => {
  console.log("In Data");
  // await keyword lets the pending function execution wait till the promise does'nt settle
  const res = await api();
  console.log(res);
};

console.log("Before Data");
getData();
console.log("After data");
