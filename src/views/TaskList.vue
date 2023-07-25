<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useTasks from '@/composables/useTasks';
import LoadingBar from '@/components/ui/LoadingBar.vue';
import PlusIcon from '@/components/icons/PlusIcon.vue';
import ItemList from '@/components/structure/ItemList.vue';
import TaskItem from '@/components/ui/TaskItem.vue';
import ActionModal from '@/components/structure/ActionModal.vue';

import type Task from '@/models/Task';

const { tasks, isLoading, fetchTasks, nextStatus, deleteTask } = useTasks();
const router = useRouter();

const idToDelete = ref<string>('');
const taskTitle = computed(() => {
  const task = tasks.value.find((tsk) => tsk.id === idToDelete.value);
  return task?.title;
});

onMounted(fetchTasks);

const onAdd = () => {
  router.push({ name: 'edit', params: { id: '' } });
};
const onDelete = (id: string) => {
  idToDelete.value = id;
};
const onEdit = (task: Task) => {
  router.push({ name: 'edit', params: { id: task.id } });
};
const resetId = () => {
  idToDelete.value = '';
};
const onConfirmedDelete = () => {
  deleteTask(idToDelete.value);
  resetId();
};
</script>

<template>
  <main class="task-list">
    <loading-bar
      class="z-10 fixed top-0 left-0"
      :is-progress="isLoading"
    />

    <button
      class="app-btn float-right flex items-center min-mobile-dims mt-[calc(-44px-1.5rem)] py-2 px-4 text-white rounded-2xl bg-primary-states"
      @click="onAdd"
    >
      <plus-icon />
      <span class="hidden 3xs:inline ml-2 font-semibold">Add task</span>
    </button>

    <item-list
      class="my-6"
      :items="tasks"
      item-key="id"
    >
      <template #default="task">
        <task-item
          v-bind="(task as any)"
          @status-next="nextStatus"
          @delete="onDelete"
          @edit="onEdit"
        />
      </template>

      <template #empty>
        <strong>{{ isLoading ? 'Loading tasks...' : 'No tasks found' }}</strong>
      </template>
    </item-list>
    <router-view></router-view>
  </main>

  <ActionModal
    v-if="idToDelete"
    actionName="delete"
    actionType="destructive"
    @ok="onConfirmedDelete"
    @cancel="resetId"
  >
    <template #title> Delete &quot;{{ taskTitle }}&quot; </template>

    <template #default>
      <p>
        The task with the name above will be permanently removed from the current list of tasks. Are
        you sure you want to delete it?
      </p>
    </template>
  </ActionModal>
</template>
