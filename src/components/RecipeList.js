import React from 'react';



function RecipeList (props) {
  return (
    <div className='recipe-container'>
    <h1>Saved Recipes</h1>
    <ul>
      {props.recipes.map(function(recipe) {
       return (
         <ul key={recipe[3]}>
          <li className='recipe-name'>
              <h2>Name: {recipe[0]} </h2>
          </li>
            <li className='recipe-ingredients'>
              <h3>Ingredients: </h3>{recipe[1]}
          </li>
            <li className='recipe-instructions'>
              <h3>Instructions: </h3>{recipe[2]}
          </li>
        </ul>
       )
     })}
     </ul>
     </div>
  )
}



export default RecipeList;
