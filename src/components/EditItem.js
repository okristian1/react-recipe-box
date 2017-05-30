import React from 'react';


const editItem = (props) => (
      <div className='recipe-column'>
        <form onSubmit={props.handleEditedSubmit}>
          <label>
            <input type="text"
              defaultValue={props.name}
              name="name"
              onChange={props.handleChange} />
              Recipe <br />
          </label>
          <label>
          <br />
            <textarea type="text" name="ingredients"
            defaultValue={props.ingredients}
            onChange={props.handleChange} />
          <br />
            Ingredients <br />
          </label>
          <label>
            <textarea type="text" name="instructions"
            defaultValue={props.instructions}
            onChange={props.handleChange} />
          <br />
            Instructions <br />
          </label>
          <br />
          <input type="submit" value="Submit" />
        </form>
        </div>
);

export default editItem;
