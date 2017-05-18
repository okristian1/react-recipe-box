import React from 'react';

function ItemList (props) {
  return (
    <div className='recipe-container'>
    <h1>Saved Recipes</h1>
    <ul>
      {props.recipes.map(function(recipe) {
       return (
         <ul key={recipe.id} className="recipe-box">
          <li className='recipe-name'>
              <h2>Name: {recipe.name} </h2>
          </li>
            <li className='recipe-ingredients'>
              <h3>Ingredients: </h3>{recipe.ingredients}
          </li>
            <li className='recipe-instructions'>
              <h3>Instructions: </h3>{recipe.instructions}
          </li>
          <li className='recipe-instructions'>
            <h3>Instructions: </h3>{recipe.id}
        </li>
        <button onClick={() => props.handleRemove(recipe.id)}> Delete </button>
        <button onClick={() => props.handleEdit(recipe.id)}> Edit </button>
        </ul>
       )
     })}
     </ul>

     </div>
  )
}

export default ItemList;
