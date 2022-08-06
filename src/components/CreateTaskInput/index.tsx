import React, { useState, KeyboardEvent } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { TasksActions } from '../../store/tasks/actions';

function CreateTaskInput() {
  const dispatch = useAppDispatch();
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value.length === 0) return;

    dispatch(TasksActions.createTask(value));
    setValue("");
  };

  return (      
   <input
      value={value}
      onChange={e => setValue(e.target.value)}
      onKeyUp={handleSubmit}
      className="new-todo"
      placeholder="What needs to be done?"
      autoFocus
    />
  );
}

export default CreateTaskInput;
