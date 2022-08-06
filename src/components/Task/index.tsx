import React, { useState, KeyboardEvent } from 'react';
import { useDispatch } from 'react-redux';
import { TasksActions } from '../../store/tasks/actions';
import { TaskItem } from '../../store/tasks/reducer';

type TaskProps = {
  task: TaskItem;
};

function Task({ task }: TaskProps) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(task.text);

  const handleEditSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (newText.length === 0) return;

    dispatch(TasksActions.editTask({ id: task.id, text: newText }));
    setIsEditing(false);
  };

  return (
    <li className={`${task.isDone ? "completed" : ""} ${isEditing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(TasksActions.completeTask({ id: task.id, isDone: !task.isDone }))}
        />
        <label onDoubleClick={() => setIsEditing(true)}>{task.text}</label>
        <button
          className="destroy"
          onClick={() => dispatch(TasksActions.removeTask(task.id))}
        ></button>
      </div>

      <input
        className="edit"
        value={newText}
        onChange={e => setNewText(e.target.value)}
        onKeyUp={handleEditSubmit}
      />
    </li>
  );
}

export default Task;

