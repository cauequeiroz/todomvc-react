import React, { useState, KeyboardEvent } from 'react';

type HeaderProps = {
  onCreateTask: (text: string) => void;
};

function CreateTaskInput({ onCreateTask }: HeaderProps) {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    if (value.length === 0) return;

    onCreateTask(value);
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
