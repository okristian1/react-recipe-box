import React, { Component } from 'react';
import ItemList from './ItemList';
import EditItem from './EditItem';
import Modal from './Modal';
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
      recipes: old,
      modalOpen: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this);
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

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  handleEdit = (props) => {
      this.setState({
        id: props.id,
        name: props.name,
        ingredients: props.ingredients,
        instructions: props.instructions
      })
    }

    handleEditedSubmit = (props) => {
      console.log(this);
    }

  onEditClick = (recipe) => {
    this.toggleModal();
    console.log(recipe);
    this.handleEdit(recipe);
}

    render() {
      return (
        <div className='recipe-column'>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input
                type="text"
                name="name"
                onChange={this.handleChange} />
                Recipe <br />
            </label>
            <label>
            <br />
              <textarea
                type="text"
                name="ingredients"
              onChange={this.handleChange} />
            <br />
              Ingredients <br />
            </label>
            <label>
              <textarea
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
            onEditClick={this.onEditClick}
          />
          <Modal
            show={this.state.modalOpen}
            onClose={this.toggleModal}>
          <EditItem
            name={this.state.name}
            ingredients={this.state.ingredients}
            instructions={this.state.instructions}
            recipes={this.state.recipes}
            handleEditedSubmit={this.handleEditedSubmit}
          />
          </Modal>
          </div>
      )
    }
}

export default Layout;
