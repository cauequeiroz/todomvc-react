import React from 'react';

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false, name: props.name }
  }

  handleChange(name) {
    this.setState({ name });
  }

  handleKeyPress(event, id, name) {
    if (event.key !== 'Enter') return;
    if (!name) return;
    
    this.props.onTaskRename(id, name);
    this.setState({ editing: false });
  }

  enableEditing() {
    this.setState({ editing: true });
  }

  render() {
    const {
      id,
      done,
      onTaskRemove,
      onTaskComplete,
    } = this.props;

    const {
      editing,
      name
    } = this.state;
  
    return (
      <li className={(done ? 'completed ' : '') + (editing ? 'editing' : '')}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={done}
            onChange={() => onTaskComplete(id)} />
          <label
            onDoubleClick={() => this.enableEditing()}>{name}</label>
          <button
            className="destroy"
            onClick={() => onTaskRemove(id)}></button>
        </div>
        <input
          className="edit"
          value={name}
          autoFocus={editing}
          onChange={event => this.handleChange(event.target.value)}
          onKeyPress={event => this.handleKeyPress(event, id, name)}/>
      </li>
    );
  }
};

export default TaskListItem;