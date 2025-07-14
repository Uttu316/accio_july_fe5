const api = (value) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value * 2);
    }, 3000);
  });
};

console.log("A");
const getUserdata = async () => {
  console.log("B");

  const res = await api(5);

  return res;
};

const getPostsdata = async () => {
  console.log("C");

  const res = await api(6);

  return res;
};

const main = async () => {
  console.log("D");

  const x = await getUserdata(); //3000
  const y = await getPostsdata();
  console.log({ x, y });
};

main();
