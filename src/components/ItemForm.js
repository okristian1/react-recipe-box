import React from 'react';

const ItemForm = (props) => (
  <div>
    <form onSubmit={props.handleSubmit}>
      <label>
        <h1>Recipe Name </h1>
        <input
          type="text"
          name="name"
          onChange={props.handleChange} />
      </label>
      <label>
      <br />
        <textarea
          type="text"
          name="ingredients"
          onChange={props.handleChange} />
      <br />
        Ingredients <br />
      </label>
      <label>
        <textarea
          type="text"
          name="instructions"
          onChange={props.handleChange} />
      <br />
        Instructions <br />
      </label>
      <br />
      <button type="submit" value="Submit">Save Recipe</button>
    </form>
    <button onClick={props.toggleAddModal}>Close</button>
    </div>
  );


export default ItemForm;
