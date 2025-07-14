const api = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(value * 2);
    }, 3000);
  });
};

const getSum = async () => {
  try {
    const x = await api(7);
    console.log(x);
  } catch (e) {
    console.log("Error", e);
  }
};
getSum();
