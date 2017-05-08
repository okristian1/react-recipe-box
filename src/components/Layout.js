import React, { Component } from 'react';
import RecipeList from'./RecipeList';
import {updateStorage, getRecipes} from './Storage'

class Layout extends Component {
  constructor(props) {
    getRecipes();
    super(props);
    this.state = {
      id: 0,
      name: '',
      ingredients: '',
      instructions: '',
      recipes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    if (
      this.state.name !== '' &&
      this.state.ingredients !== ''&&
      this.state.instructions !== '') {

    let id = this.state.id;
    this.setState({id: ++id })
    let newRecipe = [
      [this.state.name],
      [this.state.ingredients],
      [this.state.instructions],
      [this.state.id],
    ];
    this.setState({recipes: this.state.recipes.concat([newRecipe])});
    updateStorage(newRecipe);
    event.preventDefault();
  }
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
