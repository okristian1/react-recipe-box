
function updateStorage(newRecipe) {
  var savedRecipes = JSON.parse(localStorage.getItem('cookBook'));
  if (!savedRecipes) {
    savedRecipes = '';
  }
  else {
    newRecipe += savedRecipes;
  }
  newRecipe = JSON.stringify(newRecipe);
  localStorage.setItem('cookBook', newRecipe);
}

function getRecipes() {
  return localStorage.getItem('cookBook');
}

export {updateStorage};
export {getRecipes};
