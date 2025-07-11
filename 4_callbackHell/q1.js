const getUserData = (onSuccess, onFailure) => {
  console.log("Loading User Data....");
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

const getPosts = (userId, onSuccess, onFailure) => {
  console.log("Loading Posts data...");
  if (userId) {
    setTimeout(() => {
      const posts = [
        {
          postId: "2323232",
          caption: "Sunny Day",
        },
      ];
      onSuccess(posts);
    }, 3000);
  } else {
    onFailure("No Posts");
  }
};
const getComments = (postId, onSuccess, onFailure) => {
  console.log("Loading Comment for Post", postId);
  if (postId) {
    setTimeout(() => {
      const comments = [
        {
          commentId: "232121328",
          comment: "Woow!",
        },
      ];
      onSuccess(comments);
    }, 4000);
  } else {
    onFailure("No comments");
  }
};

getUserData(
  (userData) => {
    console.log("User Data recieved", userData);
    const { name, userID } = userData;

    getPosts(
      userID,
      (postsData) => {
        console.log("Posts Data recieved");
        const firstPost = postsData[0];
        const { postId } = firstPost;
        getComments(
          postId,
          (comments) => {
            console.log("Comments recieved for post", postId);
            const firstComment = comments[0];
          },
          (error) => {
            console.log(error);
          }
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
