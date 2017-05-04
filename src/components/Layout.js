import React, { Component } from 'react';
import RecipeList from'./RecipeList';


class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: '',
      ingredients: '',
      instructions: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    <RecipeList recipe={this.state.recipe} />
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
        <RecipeList recipe={this.state.recipe} />
          <form>
            <label>
              <input type="text"
                name="recipe"
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
            <input type="submit" value="Submit"
            onClick={this.handleSubmit} />
          </form>
          </div>
      )
    }
}


export default Layout;
