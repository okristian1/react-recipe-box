import React from 'react';

const EditItem = (props) => (
      <div className='recipe-column'>
        <form id="editForm" onSubmit={props.handleEditedSubmit}>
          <label>
          <h1>Name</h1>
            <input type="text"
              defaultValue={props.name}
              name="name"
              onChange={props.handleChange} />
          </label>
          <label>
          <h3>Ingredients</h3>
            <textarea type="text" name="ingredients"
            defaultValue={props.ingredients}
            onChange={props.handleChange} />
          </label>
          <label>
          <h3>Instructions</h3>
            <textarea type="text" name="instructions"
            defaultValue={props.instructions}
            onChange={props.handleChange} />
          </label>
          <br />
          <button type="submit">Save</button>
        </form>
        </div>
);

export default EditItem;
