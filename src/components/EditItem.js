import React from 'react';



class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uuid: '',
      name: 'edit',
      ingredients: '',
      instructions: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this is:', this);
  }

  render() {
    return(
      <div className='recipe-column'>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text"
              defaultValue={this.props.name}
              name="name"
              onChange={this.handleChange} />
              Recipe <br />
          </label>
          <label>
          <br />
            <textarea type="text" name="ingredients"
            defaultValue={this.state.name}
            onChange={this.handleChange} />
          <br />
            Ingredients <br />
          </label>
          <label>
            <textarea type="text" name="instructions"
            defaultValue={this.state.name}
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

export default EditItem;
