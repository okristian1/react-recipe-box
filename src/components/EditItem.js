import React from 'react';



class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'editing',
      ingredients: 'editing',
      instructions: 'editing'
    };
    this.handleChange = this.handleChange.bind(this);
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
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            />
        </label>
        <input
          type="submit"
          value="Submit"
          />
      </form>
    )
  }
}

export default EditItem;
