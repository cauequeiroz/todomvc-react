import React from 'react';
import { FiltersActions } from '../../store/filters/actions';
import { Filters } from '../../store/filters/reducer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { TasksActions } from '../../store/tasks/actions';
import useTasksSelector from '../../store/tasks/selectors';


function StatusBar() {
  const dispatch = useAppDispatch();
  const currentFilter = useAppSelector(state => state.filter.current);
  const { numberOfUncompletedTasks, numberOfCompletedTasks } = useTasksSelector();

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{numberOfUncompletedTasks}</strong> item left
      </span>
      <ul className="filters">
        <li>
          <a
            className={currentFilter === Filters.ALL ? 'selected': ''}
            onClick={() => dispatch(FiltersActions.changeToAll())}
            href="#/"
          >All</a>
        </li>
        <li>
          <a
            className={currentFilter === Filters.ACTIVE ? 'selected': ''}
            onClick={() => dispatch(FiltersActions.changeToActive())}
            href="#/active"
          >Active</a>
        </li>
        <li>
          <a
            className={currentFilter === Filters.COMPLETED ? 'selected': ''}
            onClick={() => dispatch(FiltersActions.changeToCompleted())}
            href="#/completed"
          >Completed</a>
        </li>
      </ul>

      {numberOfCompletedTasks > 0 && (
        <button
          className="clear-completed"
          onClick={() => dispatch(TasksActions.removeCompletedTasks())}
        >Clear completed</button>
      )}
    </footer>
  )
}

export default StatusBar;
