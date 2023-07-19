<script setup lang="ts">
import ActionModal from '@/components/structure/ActionModal.vue';
import ItemList from '@/components/structure/ItemList.vue';
import TaskItem from '@/components/ui/TaskItem.vue';
import useTasks from '@/composables/useTasks';
import { computed, ref } from 'vue';

const TASKS = JSON.parse(import.meta.env.VITE_TASKS);
const { tasks, nextStatus, deleteTask } = useTasks(TASKS);

const idToDelete = ref<string>('');
const taskTitle = computed(() => {
  const task = tasks.value.find((tsk) => tsk.id === idToDelete.value);
  return task?.title;
});

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
      The task with the name above will be permanently removed from the current list of tasks. Are
      you sure you want to delete it?
    </template>
  </ActionModal>
</template>

<style lang="scss">
.item-list {
  margin: 1.5rem 0;
}
</style>
