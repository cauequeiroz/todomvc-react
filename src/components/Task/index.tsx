import React, { useState, KeyboardEvent } from 'react';
import { ITask } from '../../types';

type TaskProps = {
  task: ITask;
  onComplete: (id: number, isDone: boolean) => void;
  onEdit: (id: number, text: string ) => void;
  onRemove: (id: number) => void;
};

function Task({
  task,
  onComplete,
  onEdit,
  onRemove
}: TaskProps) {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newText, setNewText] = useState<string>(task.text);

  const handleEditSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (newText.length === 0) return;
    onEdit(task.id, newText);
    setIsEditing(false);
  };

  return (
    <li className={`${task.isDone ? "completed" : ""} ${isEditing ? "editing" : ""}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.isDone}
          onChange={() => onComplete(task.id, !task.isDone)}
        />
        <label onDoubleClick={() => setIsEditing(true)}>{task.text}</label>
        <button
          className="destroy"
          onClick={() => onRemove(task.id)}
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

