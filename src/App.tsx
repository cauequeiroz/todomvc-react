import React, { useState } from 'react';

import CreateTaskInput from './components/CreateTaskInput';
import TaskList from './components/TaskList';
import StatusBar from './components/StatusBar';

import { Filters } from './types';
import useTaskManager from './hooks/useTaskManager';

function App() {
  const [filter, setFilter] = useState<Filters>(Filters.ALL);
  const [
    hasTasks,
    numberOfUncompletedTasks,
    getFilteredTasks,
    handleComplete,
    handleCompleteAll,
    handleCreateTask,
    handleEditTask,
    handleRemoveTask,
    handleRemoveCompletedTasks   
  ] = useTaskManager(filter);  

  return (
    <>
      <section className="todoapp">
        <header className="header">
          <h1>todo list</h1>
          <CreateTaskInput onCreateTask={handleCreateTask} />
        </header>

        {hasTasks && (
          <>
            <TaskList
              tasks={getFilteredTasks()}
              numberOfUncompletedTasks={numberOfUncompletedTasks}
              onComplete={handleComplete}
              onCompleteAll={handleCompleteAll}
              onEdit={handleEditTask}
              onRemove={handleRemoveTask}
            />

            <StatusBar
              numberOfUncompletedTasks={numberOfUncompletedTasks}
              currentFilter={filter}
              onChangeCurrentFilter={filter => setFilter(filter)}
              onRemoveComplete={handleRemoveCompletedTasks}
            />
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
