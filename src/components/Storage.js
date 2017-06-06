
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
  return sortAlpha(savedRecipes)
}

function sortAlpha(recipes) {
  var byName = recipes.slice(0);
  byName.sort(function(a,b) {
      var x = a.name.toLowerCase();
      var y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
  });
  return byName;
}

export {updateStorage};
export {getRecipes};
export {deleteRecipe};
export {sortAlpha};
