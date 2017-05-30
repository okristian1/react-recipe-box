import React from 'react';

const ItemForm = (props) => (
    <form onSubmit={props.handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          onChange={props.handleChange} />
          Recipe <br />
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
      <input type="submit" value="Submit" />
    </form>
  );


export default ItemForm;
