import React, { Component } from 'react';
import ItemList from './ItemList';
import EditItem from './EditItem';
import {updateStorage, getRecipes, deleteRecipe} from './Storage'
import uuid from 'uuid';

class Layout extends Component {
  constructor(props) {
    var old = getRecipes();
    super(props);
    this.state = {
      id: '',
      name: '',
      ingredients: '',
      instructions: '',
      recipes: old
    };
  }

  handleSubmit = (event) => {
    let newRecipe =
      {
        id: uuid.v4(),
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
      }
    this.setState({recipes: this.state.recipes.concat(newRecipe)});
    this.setState({
      name: '',
      ingredients: '',
      instructions: ''
    });
    updateStorage(newRecipe);
    event.preventDefault();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRemove = (id) => {
    const remainder = this.state.recipes.filter((recipe) => {
      if (recipe.id !== id) return recipe;
    });
    this.setState({recipes: remainder});
    deleteRecipe(remainder);
  }

  handleEdit = (props) => {
      console.log(props.name);
  }



    render() {
      return (
        <div className='recipe-column'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                value={this.state.name}
                type="text"
                name="name"
                onChange={this.handleChange} />
                Recipe <br />
            </label>
            <label>
            <br />
              <textarea
                value={this.state.ingredients}
                type="text"
                name="ingredients"
              onChange={this.handleChange} />
            <br />
              Ingredients <br />
            </label>
            <label>
              <textarea
                value={this.state.instructions}
                type="text"
                name="instructions"
                onChange={this.handleChange} />
            <br />
              Instructions <br />
            </label>
            <br />
            <input type="submit" value="Submit" />
          </form>
          <ItemList
            recipes={this.state.recipes}
            handleRemove={this.handleRemove}
            handleEdit={this.handleEdit}
          />
          <EditItem />
          </div>
      )
    }
}

export default Layout;
