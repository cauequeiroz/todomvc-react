import React from 'react';
import { Filters } from '../../types';

type StatusBarProps = {
  numberOfUncompletedTasks: number;
  currentFilter: Filters;
  onChangeCurrentFilter: (filter: Filters) => void;
  onRemoveComplete: () => void;
}

function StatusBar({
  numberOfUncompletedTasks,
  currentFilter,
  onChangeCurrentFilter,
  onRemoveComplete
}: StatusBarProps) {

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{numberOfUncompletedTasks}</strong> item left</span>
      <ul className="filters">
        <li>
          <a
            className={currentFilter === Filters.ALL ? 'selected': ''}
            onClick={() => onChangeCurrentFilter(Filters.ALL)}
            href="#/"
          >All</a>
        </li>
        <li>
          <a
            className={currentFilter === Filters.ACTIVE ? 'selected': ''}
            onClick={() => onChangeCurrentFilter(Filters.ACTIVE)}
            href="#/active"
          >Active</a>
        </li>
        <li>
          <a
            className={currentFilter === Filters.COMPLETED ? 'selected': ''}
            onClick={() => onChangeCurrentFilter(Filters.COMPLETED)}
            href="#/completed"
          >Completed</a>
        </li>
      </ul>

      {numberOfUncompletedTasks > 0 && (
        <button
          className="clear-completed"
          onClick={onRemoveComplete}
        >Clear completed</button>
      )}
    </footer>
  )
}

export default StatusBar;
