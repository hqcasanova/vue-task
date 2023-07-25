<script setup lang="ts">
import TaskProp from './TaskProp.vue';
import EditIcon from '../icons/EditIcon.vue';
import DeleteIcon from '../icons/DeleteIcon.vue';
import CircularProgress from './CircularProgress.vue';
import { type Task } from '@/models/Task';

export type Emits = {
  (e: 'status-next', keyValue: Task['id']): void;
  (e: 'delete', keyValue: Task['id']): void;
  (e: 'edit', keyValue: Task): void;
};

const props = defineProps<Task>();
defineEmits<Emits>();
</script>

<template>
  <dl
    class="task-item flex flex-col xs:flex-row xs:justify-between items-center mt-4 xs:mx-auto pt-6 px-7 font-normal bg-white rounded-3xl shadow-diffused shadow-grey/10"
  >
    <task-prop
      name="Name"
      class="flex items-center mb-6 xs:w-[170px] xs:flex-col xs:items-start"
    >
      {{ title }}
    </task-prop>

    <task-prop
      name="Priority"
      :priority="priority"
      class="flex items-center mb-6 xs:flex-col xs:items-start"
    >
      <p class="text-sm font-bold first-letter:uppercase">
        {{ priority }}
      </p>
    </task-prop>

    <task-prop class="flex items-center w-[100px] mb-6 justify-center text-center">
      <button
        type="button"
        class="py-2 px-3.5 font-arial text-xs font-bold text-secondary-states border border-lighter-grey rounded-xl bg-secondary-states"
        @click="$emit('status-next', id)"
      >
        {{ status }}
      </button>
    </task-prop>

    <circular-progress
      class="flex items-center mb-6 text-2xl"
      :percentage="progress"
    />

    <div class="flex items-center mb-6 text-2xl">
      <button
        type="button"
        class="mr-3.5 text-primary"
        @click="$emit('edit', props)"
      >
        <edit-icon />
      </button>

      <button
        type="button"
        class="text-danger"
        @click="$emit('delete', id)"
      >
        <delete-icon />
      </button>
    </div>
  </dl>
</template>
