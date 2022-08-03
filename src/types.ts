export type ITask = {
  id: number;
  text: string;
  isDone: boolean;
};

export enum Filters {
  ALL,
  ACTIVE,
  COMPLETED
};
