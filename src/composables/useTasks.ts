import { ref, type Ref } from 'vue';
import { useCollection, useDocument } from 'vuefire';
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
  error: Ref<string | FirestoreError | Error>;
  fetchTasks: () => Promise<any>;
  fetchTask: (id: Task['id']) => Promise<any>;
  updateTask: (id?: Task['id'], task?: Task) => Promise<any>;
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

  const fetchTask = async (id: Task['id']) => {
    if (id.length === 0) {
      return;
    }

    const task = tasks.value.find((task) => task.id === id);
    if (task) {
      return { ...task };
    }

    isLoading.value = true;
    try {
      error.value = '';
      const doc = useDocument(taskDocRef(id));
      return await doc.promise.value;
    } catch (exception) {
      error.value = (tasks as any).error.value;
    } finally {
      isLoading.value = false;
    }
  };

  const updateTask = async (id?: Task['id'], task?: Task) => {
    const isTaskEmpty = typeof task === 'undefined' || Object.keys(task).length === 0;
    isLoading.value = true;

    try {
      error.value = '';

      if (id && !isTaskEmpty) {
        // A Firebase document's ID lives outside it => removes before sending
        // TODO: this should be done at the converter level
        const { id, ...taskWithoutId } = task;

        // Firebase's web client library doesn't support objects instantiated with new...()
        // Hence the explicit cloning as as POJO. https://stackoverflow.com/a/48158848
        return await updateDoc(taskDocRef(id), taskWithoutId);
      } else if (!id && !isTaskEmpty) {
        const { id, ...taskWithoutId } = task;
        return await addDoc(taskListRef, taskWithoutId);
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
    error,
    fetchTasks,
    fetchTask,
    updateTask,
    nextStatus,
    deleteTask,
  };
}
