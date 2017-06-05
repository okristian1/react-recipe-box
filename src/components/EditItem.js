import React from 'react';

const EditItem = (props) => (
      <div className='recipe-column'>
        <form id="editForm" onSubmit={props.handleEditedSubmit}>
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
          <button type="submit">Save</button>
        </form>
        </div>
);

export default EditItem;
