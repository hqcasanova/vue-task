<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import HorizontalProgress from '@/components/ui/HorizontalProgress.vue';
import ItemList from '@/components/structure/ItemList.vue';
import TaskItem from '@/components/ui/TaskItem.vue';
import ActionModal from '@/components/structure/ActionModal.vue';

import useTasks from '@/composables/useTasks';

const { tasks, isLoading, fetchTasks, nextStatus, deleteTask } = useTasks();

const idToDelete = ref<string>('');
const taskTitle = computed(() => {
  const task = tasks.value.find((tsk) => tsk.id === idToDelete.value);
  return task?.title;
});

onMounted(fetchTasks);

const onDelete = (id: string) => {
  idToDelete.value = id;
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
  <main>
    <horizontal-progress :is-progress="isLoading" />

    <item-list
      :items="tasks"
      item-key="id"
    >
      <template #default="task">
        <task-item
          v-bind="(task as any)"
          @status-next="nextStatus"
          @delete="onDelete"
        />
      </template>

      <template #empty>
        <strong>No tasks found</strong>
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

<style scoped lang="scss">
.horizontal-progress {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.item-list {
  margin: 1.5rem 0;
}
</style>
