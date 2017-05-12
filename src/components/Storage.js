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


function updateStorage(newRecipe) {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
    console.log(savedRecipes);
    console.log(newRecipe);
    localStorage.setItem('cookBook', JSON.stringify(newRecipe));
}

function getRecipes() {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  console.log(savedRecipes);
  return savedRecipes
}

export {updateStorage};
export {getRecipes};
