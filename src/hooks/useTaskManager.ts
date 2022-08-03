import { useState } from "react";
import { Filters, ITask } from "../types";

type useTaskManagerReturn = [
  hasTasks: boolean,
  numberOfUncompletedTasks: number,
  getFilteredTasks: () => ITask[],
  handleComplete: (id: number, isDone: boolean) => void,
  handleCompleteAll: (complete: boolean) => void,
  handleCreateTask: (text: string) => void,
  handleEditTask: (id: number, text: string) => void,
  handleRemoveTask: (id: number) => void,
  handleRemoveCompletedTasks : () => void
];

function useTaskManager(filter: Filters): useTaskManagerReturn {
  const [tasks, setTasks] = useState<ITask[]>([
    { id: 1, text: 'Learn ReactJS', isDone: true },
    { id: 2, text: 'Learn Typescript', isDone: true },
    { id: 3, text: 'Learn Redux', isDone: false },
  ]);

  const hasTasks = tasks.length > 0;
  const numberOfUncompletedTasks = tasks.filter(task => !task.isDone).length;

  const handleCreateTask = (text: string) => {
    const lastTaskId = tasks.length ? tasks[tasks.length - 1].id : 0;
    const newTask = { id: lastTaskId + 1, text, isDone: false };

    setTasks([...tasks, newTask]);
  };

  const handleCompleteAll = (complete: boolean) => {
    const newTasks = tasks.map(task => ({
      ...task,
      isDone: complete
    }) as ITask);

    setTasks(newTasks);
  };

  const handleComplete = (id: number, isDone: boolean) => {
    const newTasks = tasks.map(task => {
      if (task.id !== id) return task;
      return { ...task, isDone };
    });

    setTasks(newTasks);
  };

  const handleEditTask = (id: number, text: string) => {
    const newTasks = tasks.map(task => {
      if (task.id !== id) return task;
      return { ...task, text };
    });

    setTasks(newTasks);
  };

  const handleRemoveTask = (id: number) => {
    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);
  };

  const handleRemoveCompletedTasks = () => {
    const newTasks = tasks.filter(task => !task.isDone);

    setTasks(newTasks);
  };

  const getFilteredTasks = () => {
    if (filter === Filters.ACTIVE) {
      return tasks.filter(task => !task.isDone);
    }

    if (filter === Filters.COMPLETED) {
      return tasks.filter(task => task.isDone);
    }

    return tasks;
  }

  return [
    hasTasks,
    numberOfUncompletedTasks,
    getFilteredTasks,
    handleComplete,
    handleCompleteAll,
    handleCreateTask,
    handleEditTask,
    handleRemoveTask,
    handleRemoveCompletedTasks     
  ]
}

export default useTaskManager;
