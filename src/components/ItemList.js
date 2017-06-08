import React from 'react';

function ItemList (props) {

  return (
    <div className='recipe-container'>
    {(props.recipes.length > 0)
      ? <div> <h3>Saved Receipes</h3> </div>
      : <div></div>
    }
      {props.recipes.map(function(recipe) {
       return (
         <ul key={recipe.id} value={recipe.id} className="recipe-box">
          <li className='recipe-name'>
              <h2>Name: {recipe.name} </h2>
          </li>
            <li className='recipe-ingredients'>
              <h3>Ingredients: </h3>{recipe.ingredients}
          </li>
            <li className='recipe-instructions'>
              <h3>Instructions: </h3>{recipe.instructions}
          </li>
          <br />
        <button onClick={() => props.handleRemove(recipe.id)}> Delete </button>
        <button onClick={() => props.onEditClick(recipe)}> Edit </button>
        </ul>
       )
     })
   }
 </div>
  )
}

export default ItemList;
