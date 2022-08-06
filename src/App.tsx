import React from 'react';

import CreateTaskInput from './components/CreateTaskInput';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';

import useTasksSelector from './store/tasks/selectors';

function App() {
  const { hasTasks } = useTasksSelector();

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todo list</h1>
          <CreateTaskInput />
        </header>

        {hasTasks && (
          <>
            <TaskList />
            <StatusBar />
          </>
        )}
      </section>

      <footer className="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/cauequeiroz/todomvc-react">Caue Queiroz</a></p>
        <p>Layout provided by <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
    </>
  );
}

export default App;
