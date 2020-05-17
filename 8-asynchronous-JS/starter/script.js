const getIDs = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([528, 883, 214, 598]);
  }, 1500);
});

const getRecipe = (recID) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (ID) => {
        const recipe = { title: "Fresh tomato pasta", publisher: "Jonas" };
        resolve(`${ID}: ${recipe.title}`);
      },
      1500,
      recID
    );
  });
};

const getRelated = (publisher) => {
  return new Promise((resolve, reject) => {
    setTimeout(
      (pub) => {
        const recipe = { title: "Italian Pizza", publisher: "Jonas" };
        resolve(`${pub}: ${recipe.title}`);
      },
      1500,
      publisher
    );
  });
};

getIDs
  .then((IDs) => {
    console.log(IDs);
    return getRecipe(IDs[3]);
  })
  .then((recipe) => {
    console.log(recipe);
    return getRelated("Jonas");
  })
  .then((related) => {
    console.log(related);
  })
  .catch((error) => {
    console.log("Error!!");
  });
