const getUserData = (onSuccess, onFailure) => {
  const name = prompt("Enter username");
  if (name === "Abc") {
    const user = {
      name: "Abc",
      userID: 2121212,
    };
    onSuccess(user);
  } else {
    onFailure("oops");
  }
};

getUserData(
  (userData) => {
    const { name } = userData;
    console.log(name);
  },
  (error) => {
    console.log(error);
  }
);
