import React from 'react';

const StatusBar = props => {
  const {
    itemsLeft,
    filter,
    quantity,
    onChangeFilter,
    onClearCompleted
  } = props;

  if (!quantity) return <div></div>;

  return (
    <footer className="footer">
      <span className="todo-count"><strong>{itemsLeft}</strong> {itemsLeft > 1 ? 'items' : 'item'} left</span>
      <ul className="filters">
        <li>
          <a
            className={filter === 'all' ? 'selected' : ''}
            onClick={() => onChangeFilter('all')}
            href="#/">All</a>
        </li>
        <li>
          <a
            className={filter === 'active' ? 'selected' : ''}
            onClick={() => onChangeFilter('active')}
            href="#/active">Active</a>
        </li>
        <li>
          <a
            className={filter === 'completed' ? 'selected' : ''}
            onClick={() => onChangeFilter('completed')}
            href="#/completed">Completed</a>
        </li>
      </ul>
      {
        quantity > itemsLeft &&
        <button onClick={onClearCompleted} className="clear-completed">Clear completed</button>
      }
    </footer>
  );
};

export default StatusBar;