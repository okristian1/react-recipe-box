
function updateStorage(newRecipe) {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  if (!savedRecipes) {
    localStorage.setItem('cookBook', JSON.stringify([]));
    savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  }
    savedRecipes.push(newRecipe);
    localStorage.setItem('cookBook', JSON.stringify(savedRecipes));
}

function deleteRecipe(remainder) {
  localStorage.setItem('cookBook', JSON.stringify(remainder));
}

function getRecipes() {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  if (!savedRecipes) {
    return []
  }
  console.log(savedRecipes);
  return savedRecipes
}

export {updateStorage};
export {getRecipes};
export {deleteRecipe};
