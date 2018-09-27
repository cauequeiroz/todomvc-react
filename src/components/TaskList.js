import React from 'react';
import TaskListItem from './TaskListItem';

const TaskList = props => {
  const {
    tasks,
    allCompleted,
    onTaskRemove,
    onTaskComplete,
    onTaskRename,
    onToggleAll
  } = props;

  return (
    <section className="main">
      {
        !!tasks.length &&
        <div>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={allCompleted}
            onChange={() => onToggleAll()} />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </div>
      }
      <ul className="todo-list">
        {tasks.map((task, index) => (
          <TaskListItem
            key={task.id}
            id={task.id}
            name={task.name}
            done={task.done}
            onTaskRemove={onTaskRemove}
            onTaskComplete={onTaskComplete}
            onTaskRename={onTaskRename} />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;