let count = 0;

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

  constructor({
    id = count.toString(),
    title = 'Task',
    priority = PRIORITIES[0],
    status = STATUSES[0],
    progress = 0,
  }) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.status = status;
    this.progress = progress;
    count++;
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
