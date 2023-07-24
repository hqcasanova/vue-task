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
  <dl class="task">
    <task-prop name="Name">
      {{ title }}
    </task-prop>
    <task-prop
      name="Priority"
      :priority="priority"
    >
      <p class="task__priority">
        {{ priority }}
      </p>
    </task-prop>
    <task-prop class="task__status">
      <button
        type="button"
        class="status__btn"
        @click="$emit('status-next', id)"
      >
        {{ status }}
      </button>
    </task-prop>
    <circular-progress
      :percentage="progress"
      class="task-prop task__progress"
    />

    <div class="task-prop task__actions">
      <button
        type="button"
        class="task__edit"
        @click="$emit('edit', props)"
      >
        <edit-icon />
      </button>

      <button
        type="button"
        class="task__delete"
        @click="$emit('delete', id)"
      >
        <delete-icon />
      </button>
    </div>
  </dl>
</template>

<style scoped lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/mixins.scss';

.task {
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  padding: 1.38em 1.88em;
  font-weight: 400;
  background: $white;
  border-radius: 1.5em;
  box-shadow: 0 0.5em 3.6em rgba($grey, 0.1);

  .task-prop {
    display: inline-flex;
    align-items: center;

    &:not(:first-child) {
      margin-top: 1em;
    }
  }

  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 1rem auto 0;

    .task-prop {
      display: block;
      margin-top: 0 !important;

      &:first-child {
        width: 170px;
      }

      &.task__priority,
      &.task__status {
        width: 100px;
      }
    }
  }

  .status__btn {
    @include button($lightest-grey);
    padding: 0.6em 1.2em;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.75em;
    font-weight: 700;
    color: $grey;
    border: 1px solid $lighter-grey;
    border-radius: 0.7em;
  }

  &__priority {
    font-size: 0.875em;
    font-weight: 700;

    &:first-letter {
      text-transform: uppercase;
    }
  }

  &__status {
    text-align: center;
  }

  &__progress,
  &__actions {
    font-size: 1.4em;
    color: $primary;
  }

  &__actions * {
    display: inline-flex;
  }

  &__edit {
    margin-right: 0.8em;
  }

  &__delete {
    color: $danger;
  }
}
</style>
