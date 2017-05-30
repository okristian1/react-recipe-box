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
      editRecipe: '',
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

  // handleEdit = (props) => {
  //     this.setState({
  //       id: props.id,
  //       name: props.name,
  //       ingredients: props.ingredients,
  //       instructions: props.instructions
  //     })
  //   }

  handleEdit = (recipe) => {
      this.setState({editRecipe: recipe})
//      console.log(this.state.editRecipe);
  }

  handleEditedSubmit = (event) => {
    event.preventDefault();
    this.toggleModal();
    console.log(this);
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
              name={this.state.editRecipe.name}
              ingredients={this.state.editRecipe.ingredients}
              instructions={this.state.editRecipe.instructions}
              toggleModal={this.toggleModal}
              handleEditedSubmit={this.handleEditedSubmit}
            />
          </Modal>

          </div>
      )
    }
}

export default Layout;
