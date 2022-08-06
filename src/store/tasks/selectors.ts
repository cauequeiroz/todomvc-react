import { Filters } from "../filters/reducer";
import { useAppSelector } from "../hooks"

const useTasksSelector = () => {
  const tasks = useAppSelector(state => state.tasks);
  const filter = useAppSelector(state => state.filter.current);

  return {
    hasTasks: tasks.length > 0,

    numberOfUncompletedTasks: tasks.filter(task => !task.isDone).length,

    numberOfCompletedTasks: tasks.filter(task => task.isDone).length,

    getFilteredTasks: () => {
      if (filter === Filters.ACTIVE) {
        return tasks.filter(task => !task.isDone);
      }

      if (filter === Filters.COMPLETED) {
        return tasks.filter(task => task.isDone);
      }

      return tasks;
    }
  }
};

export default useTasksSelector;
