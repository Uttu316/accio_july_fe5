const getUserData = () => {
  console.log("Loading UserData");
  return new Promise((res, rej) => {
    setTimeout(() => {
      res({
        userId: 3322323,
        name: "ABC",
      });
    }, 3000);
  });
};

const getPosts = (userId) => {
  console.log("Loading Posts for user", userId);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          postId: "232312321",
          caption: "Sunny Day",
        },
      ]);
    }, 3000);
  });
};

const getComments = (postId) => {
  console.log("Loading Comments for post", postId);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res([
        {
          commentId: "534232",
          comment: "Wooow!",
        },
      ]);
    }, 3000);
  });
};

getUserData()
  .then((userData) => {
    console.log("User Data recieved", userData.userId);
    return getPosts(userData.userId);
  })
  .then((posts) => {
    console.log("Posts recieved", posts);
    return getComments(posts[0].postId);
  })
  .then((comments) => {
    console.log("Comments recived", comments);
  })
  .catch((err) => {
    console.log("OOOh Error", err);
  });
