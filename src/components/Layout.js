import React, { Component } from 'react';
import RecipeList from'./RecipeList';
import {updateStorage, getRecipes} from './Storage'
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
          <RecipeList recipes={this.state.recipes} />
          </div>
      )
    }
}

export default Layout;
