import React, { Component } from 'react';
import RecipeList from'./RecipeList';




class Layout extends Component {
  constructor(props) {
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
    let id = this.state.id;
    this.setState({id: ++id })
    let newRecipe = [
      [this.state.name],
      [this.state.ingredients],
      [this.state.instructions],
      [this.state.id],
    ];
    this.setState({recipes: this.state.recipes.concat([newRecipe])});
    .then localStorage.setItem('cookBook', JSON.stringify(this.state.recipes));
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
      console.log(this.state.recipes);
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
