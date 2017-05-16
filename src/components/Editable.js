import React from 'react';


class Editable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  toggleEditing() {
    this.setState({editing: !this.state.editing });
  }


  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e);
    }
  }

  finishEdit = (e) => {
    const value = e.target.value;

    if(this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

  displayEditableItem() {
    return this.state.editing?
    <EditItem
    content={this.props.item.name}
    handleDone={this.toggleEditing}
    handleUpdates={this.handleUpdates}
    {...this.props}
    />
    :
    <ViewItem
    editItem={this.toggleEditing}
    />
  }
}

export default Editable;
