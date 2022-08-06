import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TasksActions } from '../../store/tasks/actions';
import useTasksSelector from '../../store/tasks/selectors';
import Task from '../Task';

function TaskList() {
  const dispatch = useAppDispatch();
  
  const { numberOfUncompletedTasks, getFilteredTasks } = useTasksSelector();
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    if (numberOfUncompletedTasks === 0) {
      setComplete(true);
    } else {
      setComplete(false);
    }
  }, [numberOfUncompletedTasks]);

  return (
    <section className="main">
      <input
        checked={complete}
        onChange={() => dispatch(TasksActions.completeAll(!complete))}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {getFilteredTasks().map(task => (
          <Task
            key={task.id}  
            task={task} 
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
