import { ref, type Ref } from 'vue';
import { useCollection } from 'vuefire';
import { deleteDoc, updateDoc, FirestoreError } from '@firebase/firestore';
import { taskDocRef, taskListRef } from '@/api';

import Task from '@/models/Task';

const STATUSES = JSON.parse(import.meta.env.VITE_STATUSES);
const tasks = ref<Task[]>([]);
const error = ref<string | FirestoreError | Error>('');
const isLoading = ref<boolean>(false);

type UseTasks = {
  tasks: Ref<Task[]>;
  isLoading: Ref<boolean>;
  fetchTasks: () => Promise<void>;
  nextStatus: (id: Task['id']) => Promise<void>;
  deleteTask: (id: Task['id']) => Promise<void>;
};

export default function (): UseTasks {
  const fetchTasks = async () => {
    isLoading.value = true;

    try {
      error.value = '';
      useCollection(taskListRef, { target: tasks });

      // Vuefire's promise is itself a ref of a type internal to Vuefire and casted as "any" for simplicity
      return await (tasks as any).promise.value;
    } catch (exception) {
      error.value = (tasks as any).error.value;
    } finally {
      isLoading.value = false;
    }
  };

  const deleteTask = async (id: Task['id']) => {
    isLoading.value = true;

    try {
      error.value = '';
      return await deleteDoc(taskDocRef(id));
    } catch (exception) {
      error.value = exception as string | FirestoreError | Error;
    } finally {
      isLoading.value = false;
    }
  };

  const nextStatus = async (id: Task['id']) => {
    const task = tasks.value.find((task) => task.id === id);

    if (task) {
      const currIndex = STATUSES.indexOf(task.status);
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

      isLoading.value = true;

      try {
        error.value = '';

        // Firebase's web client library doesn't support objects instantiated with new...()
        // Hence the explicit cloning as as POJO. https://stackoverflow.com/a/48158848
        return await updateDoc(taskDocRef(id), { ...task });
      } catch (exception) {
        error.value = exception as string | FirestoreError | Error;
      } finally {
        isLoading.value = false;
      }
    }
  };

  return {
    tasks,
    isLoading,
    fetchTasks,
    nextStatus,
    deleteTask,
  };
}
