import React from 'react';

class Input extends React.Component {
  handleKeyPress(event) {
    if (event.key !== 'Enter') return;

    this.props.onSubmit();
  }

  render() {
    const { value, onChange } = this.props;

    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={event => onChange(event.target.value)}
        onKeyPress={event => this.handleKeyPress(event)} />
    )
  }
};

export default Input;