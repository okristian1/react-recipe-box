import React, { Component } from 'react';
import RecipeList from'./RecipeList';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ingredients: '',
      instructions: '',
      recipes: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    let newRecipe = [
      [this.state.name],
      [this.state.ingredients],
      [this.state.instructions],
    ];
    this.setState({recipes: this.state.recipes.concat([newRecipe])});
    event.preventDefault();
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    console.log(value);
    this.setState({
      [name]: value
    });
  }


    render() {
      return (
        <div className='recipe-column'>
        <RecipeList recipes={this.state.recipes} />
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
          </div>
      )
    }
}


export default Layout;
