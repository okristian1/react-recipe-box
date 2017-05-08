
function updateStorage(newRecipe) {
  var savedRecipes = localStorage.getItem('cookBook');
  if (!savedRecipes)
    savedRecipes = '';
  localStorage.setItem('cookBook', savedRecipes + newRecipe);
}

function getRecipes() {
  var old = localStorage.getItem('cookBook');
  var items = new Array(old);
  console.log(items);
  return items;
}

export {updateStorage};
export {getRecipes};
