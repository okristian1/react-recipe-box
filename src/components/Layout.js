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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleSubmit(event) {
    let newRecipe =
      {
        id: uuid.v4(),
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
      }
    this.setState({recipes: this.state.recipes.concat(newRecipe)});
    updateStorage(newRecipe);
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleRemove(id) {
    const remainder = this.state.recipes.filter((recipe) => {
      if (recipe.id !== id) return recipe;
    });
    this.setState({recipes: remainder});
    deleteRecipe(remainder);
  }

  handleEdit(item) {
    event.preventDefault();
    const toEdit = this.state.recipes.filter((recipe) => {
      if (item.id === recipe.id) return recipe;
    });
    let editedRecipe =
      {
        id: uuid.v4(),
        name: 'test',
        ingredients: 'test',
        instructions: 'test',
      }
    const remainder = this.state.recipes.filter((recipe) => {
      if (recipe.id !== item.id) return recipe;
    });
    this.setState({recipes: remainder});
    this.setState({recipes: this.state.recipes.concat(editedRecipe)});
    }

    render() {
      return (
        <div className='recipe-column'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text"
                name="name"
                onChange={this.handleChange} />
                Recipe <br />
            </label>
            <label>
            <br />
              <textarea type="text" name="ingredients"
              onChange={this.handleChange} />
            <br />
              Ingredients <br />
            </label>
            <label>
              <textarea type="text" name="instructions"
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
          <EditItem
            name={this.state.name}
          />

          </div>
      )
    }
}

export default Layout;
