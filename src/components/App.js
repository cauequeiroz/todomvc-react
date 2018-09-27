import React, { Component } from 'react';
import Input from './Input';
import TaskList from './TaskList';
import StatusBar from './StatusBar';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: '',
      filter: 'all',
      tasks: [
        { id: 1, name: 'Taste Javascript', done: true },
        { id: 2, name: 'Buy a unicorn', done: false }
      ],
      allCompleted: false
    }
  }

  handleSearchChange(term) {
    this.setState({ term });
  }

  addTask(name) {
    if (!name) return;

    const { tasks } = this.state;
    const lastId = tasks[tasks.length - 1] ? tasks[tasks.length - 1].id : 0;

    this.setState({
      term: '',
      tasks: [
        ...tasks,
        { id: lastId + 1, name, done: false }
      ]
    });
  }

  removeTask(id) {
    const tasks = this.state.tasks.filter(item => item.id !== id);
    this.setState({ tasks });
  }

  completeTask(id) {
    const tasks = this.state.tasks.map(item => {
      if (item.id !== id) return item;

      return {
        ...item, done: !item.done
      }      
    });
    this.setState({ tasks });
  }
  
  renameTask(id, name) {
    const tasks = this.state.tasks.map(item => {
      if (item.id !== id) return item;

      return {
        ...item, name
      }      
    });
    this.setState({ tasks });
  }

  toggleAll() {
    const allCompleted = !this.state.allCompleted;
    const tasks = this.state.tasks.map(task => ({
      ...task,
      done: allCompleted
    }));

    this.setState({ allCompleted, tasks });
  }

  clearCompleted() {
    const tasks = this.state.tasks.filter(task => !task.done);
    this.setState({ tasks, allCompleted: false });
  }

  changeFilter(filter) {
    this.setState({ filter });
  }

  render() {
    const { filter } = this.state; 
    const itemsLeft = this.state.tasks.filter(task => !task.done).length;
    const tasksQuantity = this.state.tasks.length;
    let tasks = this.state.tasks.slice();

    if (filter === 'active')
      tasks = tasks.filter(task => !task.done);
    
    if (filter === 'completed')
      tasks = tasks.filter(task => task.done);

    return (
      <div className="App">
        <header className="header">
          <h1>todos</h1>
          <Input  
            value={this.state.term}
            onChange={value => this.handleSearchChange(value)}
            onSubmit={() => this.addTask(this.state.term)} />
        </header>
        
        <TaskList
          tasks={tasks}
          allCompleted={this.state.allCompleted}
          onTaskRemove={id => this.removeTask(id)}
          onTaskComplete={id => this.completeTask(id)}
          onTaskRename={(id, name) => this.renameTask(id, name)}
          onToggleAll={() => this.toggleAll()} />

        <StatusBar
          quantity={tasksQuantity}
          itemsLeft={itemsLeft}
          filter={this.state.filter}
          onChangeFilter={type => this.changeFilter(type)}
          onClearCompleted={() => this.clearCompleted()} />
      </div>
    );
  }
}

export default App;
