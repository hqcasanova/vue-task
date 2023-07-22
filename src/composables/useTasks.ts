import { ref, type Ref } from 'vue';
import { useCollection } from 'vuefire';
import { deleteDoc, updateDoc, addDoc, FirestoreError } from '@firebase/firestore';
import { taskDocRef, taskListRef } from '@/api';

import Task from '@/models/Task';

const STATUSES = JSON.parse(import.meta.env.VITE_STATUSES);
const tasks = ref<Task[]>([]);
const error = ref<string | FirestoreError | Error>('');
const isLoading = ref<boolean>(false);

type UseTasks = {
  tasks: Ref<Task[]>;
  isLoading: Ref<boolean>;
  fetchTasks: () => Promise<any>;
  nextStatus: (id: Task['id']) => Promise<any>;
  deleteTask: (id: Task['id']) => Promise<any>;
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

  const updateTask = async (id?: Task['id'], task?: Task) => {
    const isTaskEmpty = task && Object.keys(task).length > 0;
    isLoading.value = true;

    try {
      error.value = '';

      if (id && !isTaskEmpty) {
        // Firebase's web client library doesn't support objects instantiated with new...()
        // Hence the explicit cloning as as POJO. https://stackoverflow.com/a/48158848
        return await updateDoc(taskDocRef(id), { ...task });
      } else if (!id && !isTaskEmpty) {
        return await addDoc(taskListRef, { ...task });
      } else if (id && isTaskEmpty) {
        return await deleteDoc(taskDocRef(id));
      } else if (!id && isTaskEmpty) {
        throw new Error('No ID or task data provided while updating task list');
      }
    } catch (exception) {
      error.value = exception as string | FirestoreError | Error;
    } finally {
      isLoading.value = false;
    }
  };

  const deleteTask = async (id: Task['id']) => {
    return await updateTask(id);
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

      return updateTask(id, task);
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
