import uuid from 'uuid';

function testData() {
  var testData =
    {
      id: uuid.v4(),
      name: "Pancakes",
      ingredients: "Eggs, milk, flour",
      instructions: "Mix dry stuff, add milk and eggs while stirring",
    }
//    console.log(testData);
    localStorage.setItem('cookBook', JSON.stringify(testData));
}
//testData();

function initializeLocalStorage() {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  if (!savedRecipes) {
    localStorage.setItem('cookBook', JSON.stringify([]));
    console.log("empty");
  } else {
  console.log("here");
}
}

initializeLocalStorage();


function updateStorage(newRecipe) {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  if (!savedRecipes) {
    localStorage.setItem('cookBook', JSON.stringify([]));
    savedRecipes = JSON.parse(localStorage.getItem('cookBook'));

  }
  console.log(newRecipe);
    savedRecipes.push(newRecipe);
    console.log(savedRecipes);

    localStorage.setItem('cookBook', JSON.stringify(savedRecipes));
}

function getRecipes() {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  console.log(savedRecipes);
  return savedRecipes
}

export {updateStorage};
export {getRecipes};
