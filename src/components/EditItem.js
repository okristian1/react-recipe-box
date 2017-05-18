import React from 'react';


function EditItem(props) {

    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.props.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
}

export default EditItem;
