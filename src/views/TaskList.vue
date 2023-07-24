<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useTasks from '@/composables/useTasks';
import HorizontalProgress from '@/components/ui/HorizontalProgress.vue';
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
  <main>
    <horizontal-progress :is-progress="isLoading" />

    <button
      class="task-list__add"
      @click="onAdd"
    >
      <plus-icon />
      <span class="add__label">Add task</span>
    </button>

    <item-list
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

<style scoped lang="scss">
@import '@/scss/mixins.scss';

.horizontal-progress {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
}

.task-list__add {
  @include button($primary);
  float: right;
  display: flex;
  align-items: center;
  height: 48px;
  margin-top: calc(-44px - 1.5rem);
  border-radius: 1rem;

  .add__label {
    display: none;
    margin-left: $base-spacing;
    font-weight: 600;

    @media (min-width: 340px) {
      display: inline;
    }
  }
}

.item-list {
  margin: 1.5rem 0;
}
</style>
