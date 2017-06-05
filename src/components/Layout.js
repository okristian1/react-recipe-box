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
      addModalOpen: false,
      editModalOpen: false,
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
    this.toggleAddModal();
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

  toggleEditModal = () => {
    this.setState({
      editModalOpen: !this.state.editModalOpen
    });
  }

  toggleAddModal = () => {
    this.setState({
      addModalOpen: !this.state.addModalOpen
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
    this.emptyState();
    updateStorage(editedRecipe);
    this.toggleEditModal();
    console.log(this.state.id);
    this.setState({recipes: this.state.recipes.concat(editedRecipe)});
  }


  onEditClick = (recipe) => {
    this.toggleEditModal();
    this.handleEdit(recipe);
}

    render() {
      return (
        <div className='recipe-column'>

        <button
          onClick={this.toggleAddModal}>
          Add Recipe
        </button>

        <Modal
          show={this.state.addModalOpen}
          onClose={this.toggleAddModal}>
          <ItemForm
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            toggleAddModal={this.toggleAddModal}
          />
        </Modal>

          <ItemList
            recipes={this.state.recipes}
            handleRemove={this.handleRemove}
            onEditClick={this.onEditClick}
          />

          <Modal
            show={this.state.editModalOpen}
            onClose={this.toggleModal}>
            <EditItem
              name={this.state.name}
              ingredients={this.state.ingredients}
              instructions={this.state.instructions}
              toggleEditModal={this.toggleEditModal}
              handleChange={this.handleChange}
              handleEditedSubmit={this.handleEditedSubmit}
            />
          </Modal>

          </div>
      )
    }
}

export default Layout;
