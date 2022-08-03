import React, { useEffect, useState } from 'react';
import { ITask } from '../../types';
import Task from '../Task';

type TaskListProps = {
  tasks: ITask[];
  numberOfUncompletedTasks: number;
  onComplete: (id: number, isDone: boolean) => void;
  onCompleteAll: (complete: boolean) => void;
  onEdit: (id: number, text: string) => void;
  onRemove: (id: number) => void;  
};

function TaskList({
  tasks,
  numberOfUncompletedTasks,
  onComplete,
  onCompleteAll,
  onEdit,
  onRemove
}: TaskListProps) {
  const [complete, setComplete] = useState<boolean>(false);

  const handleChange = () => {
    onCompleteAll(!complete);
  };

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
        onChange={handleChange}
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
      />
      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
        {tasks.map(task => (
          <Task
            key={task.id}  
            task={task}
            onComplete={onComplete}
            onEdit={onEdit}
            onRemove={onRemove}     
          />
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
