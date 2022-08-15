export type TaskCheckListItem = {
  text: string;
  completed: boolean;
};

export type TaskChecklist = Array<TaskCheckListItem>;

export type TaskType = 'habit' | 'daily' | 'todo' | 'reward';

export type TaskPriority = 0.1 | 1 | 1.5 | 2;

export type TaskMeta = {
  _id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type Task = {
  text: string;
  type: TaskType;
  alias: string;
  value: number;
  priority: TaskPriority;
  notes?: string;
  checklist?: TaskChecklist;
} & TaskMeta;

export type CreateTaskBody = Exclude<Task, TaskMeta>;
