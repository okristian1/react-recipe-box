import React, { Component } from 'react';
import ItemList from './ItemList';
import EditItem from './EditItem';
import ItemForm from './ItemForm';
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
    let newRecipe =
      {
        id: uuid.v4(),
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
      }
    this.setState({recipes: this.state.recipes.concat(newRecipe)});
    this.emptyState();
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
    deleteRecipe(remainder);
    this.setState({recipes: remainder});
  }

  toggleModal = () => {
    this.setState({
      modalOpen: !this.state.modalOpen
    });
  }

  handleEdit = (recipe) => {
      console.log(recipe);
      this.handleRemove(recipe.id);
      this.setState({
        id: recipe.id,
        name: recipe.name,
        ingredients: recipe.ingredients,
        instructions: recipe.instructions
      });

  }

  emptyState = () => {
    this.setState({
      name: '',
      ingredients: '',
      instructions: ''
    });
  }

  handleEditedSubmit = (event) => {
    event.preventDefault();
    let editedRecipe =
      {
        id: this.state.id,
        name: this.state.name,
        ingredients: this.state.ingredients,
        instructions: this.state.instructions,
      }
      console.log(editedRecipe.id);
    this.emptyState();
    updateStorage(editedRecipe);
    this.toggleModal();
    console.log(this.state.id);
    this.setState({recipes: this.state.recipes.concat(editedRecipe)});
  }


  onEditClick = (recipe) => {
    this.toggleModal();
    this.handleEdit(recipe);
}

    render() {
      return (
        <div className='recipe-column'>

          <ItemForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
          />

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
              toggleModal={this.toggleModal}
              handleChange={this.handleChange}
              handleEditedSubmit={this.handleEditedSubmit}
            />
          </Modal>

          </div>
      )
    }
}

export default Layout;
