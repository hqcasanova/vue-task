let count = -1;

const STATUSES = JSON.parse(import.meta.env.VITE_STATUSES);
const PRIORITIES = JSON.parse(import.meta.env.VITE_PRIORITIES);

export type Priority = (typeof PRIORITIES)[number];
export type Status = (typeof STATUSES)[number];

export default class {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  progress: number;

  constructor(
    { title = 'Task', priority = PRIORITIES[0], status = STATUSES[0], progress = 0 },
    id?: string
  ) {
    count++;
    this.id = id || count.toString();
    this.title = title;
    this.priority = priority;
    this.status = status;
    this.progress = progress;
  }
}

// As of Vue 3.3, defining props from imported classes doesn't work. Hence the type below.
export type Task = {
  id: string;
  title: string;
  priority: Priority;
  status: Status;
  progress: number;
};
