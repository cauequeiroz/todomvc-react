import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TaskItem = {
  id: number;
  text: string;
  isDone: boolean;
}

const initialState = [
  { id: 1, text: 'Learn ReactJS', isDone: true },
  { id: 2, text: 'Learn Typescript', isDone: true },
  { id: 3, text: 'Learn Redux', isDone: false },
] as TaskItem[];

export const tasksReducer = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    createTask: (tasks, action: PayloadAction<string>) => {
      const lastTaskId = tasks.length ? tasks[tasks.length - 1].id : 0;

      const newTask = {
        id: lastTaskId + 1,
        text: action.payload,
        isDone: false
      };
  
      tasks.push(newTask);
    },

    completeAll: (tasks, action: PayloadAction<boolean>) => {
      return tasks.map(task => ({
        ...task,
        isDone: action.payload
      }));
    },
  
    completeTask: (tasks, action: PayloadAction<{ id: number, isDone: boolean }>) => {
      const { id, isDone } = action.payload;
      
      return tasks.map(task => {
        if (task.id !== id) return task;
        return { ...task, isDone };
      });
    },
  
    editTask: (tasks, action: PayloadAction<{ id: number, text: string }>) => {
      const { id, text } = action.payload;

      return tasks.map(task => {
        if (task.id !== id) return task;
        return { ...task, text };
      });
    },
  
    removeTask: (tasks, action: PayloadAction<number>) => {
      return tasks.filter(task => task.id !== action.payload);
    },
  
    removeCompletedTasks: tasks => {
      return tasks.filter(task => !task.isDone);
    }
  }
});
