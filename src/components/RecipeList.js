import React from 'react';



function RecipeList (props) {
  return (
    <div>
    <ul>
      {props.recipes.map(function(recipe) {
       return (
          <li className='popular-list'>
            {recipe}
          </li>
       )
     })}
     </ul>
     </div>
  )
}



export default RecipeList;
