import { ref, type Ref } from 'vue';
import Task from '@/models/Task';

const STATUSES = JSON.parse(import.meta.env.VITE_STATUSES);
const tasks = ref<Task[]>([]);

type UseTasks = {
  nextStatus: (id: Task['id']) => void;
  deleteTask: (id: Task['id']) => void;
  tasks: Ref<Task[]>;
};

export default function (rawTasks: any[]): UseTasks {
  if (rawTasks) {
    tasks.value = rawTasks.map((data) => new Task(data));
  }

  const deleteTask = (id: Task['id']) => {
    const index = tasks.value.findIndex((task) => task.id === id);
    tasks.value.splice(index, 1);
  };

  const nextStatus = (id: Task['id']) => {
    const task = tasks.value.find((task) => task.id === id);
    const currIndex = STATUSES.indexOf(task?.status || '');
    const nextIndex = (currIndex + 1) % STATUSES.length;
    const nextStatus = STATUSES[nextIndex];

    let nextProgress = 50;
    if (nextStatus === 'To Do') {
      nextProgress = 0;
    } else if (nextStatus === 'Done') {
      nextProgress = 100;
    }

    if (task) {
      task.progress = nextProgress;
      task.status = nextStatus;
    }
  };

  return {
    tasks,
    nextStatus,
    deleteTask,
  };
}
