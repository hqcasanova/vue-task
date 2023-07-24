<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import ActionModal from '@/components/structure/ActionModal.vue';

import useTasks from '@/composables/useTasks';

import Task from '@/models/Task';

export type Props = {
  id: string;
};
const props = withDefaults(defineProps<Props>(), {
  id: '',
});

const router = useRouter();
const { updateTask, fetchTask, isLoading } = useTasks();

const priorities = JSON.parse(import.meta.env.VITE_PRIORITIES);
const task = ref<Task>(new Task({}));
const isTouched = ref<boolean>(false);

const actionName = computed(() => (props.id ? 'edit' : 'add'));
const isTitleBlank = computed(() => task.value.title.trim().length === 0);

onMounted(async () => {
  if (props.id) {
    task.value = await fetchTask(props.id);
  }
});

const onCancelAction = () => {
  router.push({ name: 'home' });
};
const onConfirmedAction = () => {
  isTouched.value = true;

  if (!isTitleBlank.value) {
    updateTask(props.id, task.value);
    onCancelAction();
  }
};
</script>

<template>
  <ActionModal
    :actionName="actionName"
    actionType="standard"
    @ok="onConfirmedAction"
    @cancel="onCancelAction"
  >
    <template #title>{{ actionName }} task</template>

    <template #default>
      <div v-if="isLoading">Loading task data...</div>

      <form class="task-edit">
        <label class="task-edit__entry">
          <span class="task-edit__label">Task</span>
          <input
            v-model="task.title"
            :class="['task-edit__field', { 'task-edit__field--error': isTouched && isTitleBlank }]"
            @blur="isTouched = true"
          />
        </label>

        <fieldset class="task-edit__entry">
          <legend class="task-edit__label">Priority</legend>

          <div class="task-edit__priorities">
            <label
              v-for="priorityValue in priorities"
              :key="`${task.id}-${priorityValue}`"
              :class="[
                'task-edit__btn',
                `task-edit__btn--${priorityValue}`,
                { 'task-edit__btn--checked': priorityValue === task.priority },
              ]"
            >
              <input
                v-model="task.priority"
                class="task-edit__radio"
                type="radio"
                :value="priorityValue"
              />
              {{ priorityValue }}
            </label>
          </div>
        </fieldset>
      </form>
    </template>
  </ActionModal>
</template>

<style scoped lang="scss">
@import '@/scss/mixins.scss';
.task-edit {
  &__entry {
    margin-top: 1.5rem;
  }

  &__label {
    display: block;
    margin-bottom: 0.625rem;
    font-weight: 700;
    color: $grey;
  }

  &__field {
    display: block;
    width: 100%;
    padding: 1rem 1.125rem;
    font-size: inherit;
    background: $white;
    border: 1px solid $light-grey;
    border-radius: 1rem;
    outline: none;

    &:hover,
    &:focus {
      border-color: $black;
    }

    &--error {
      border-color: $danger;
    }
  }

  &__priorities {
    display: flex;
    flex-wrap: wrap;
  }

  &__radio {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  &__btn {
    @include button();
    opacity: 1;
    margin: 0 $base-spacing $base-spacing 0;
    font-weight: 500;
    border-radius: 0.75rem;

    &:first-letter {
      text-transform: uppercase;
    }

    &--low {
      color: $ok;
      border: 1px solid $ok;
    }
    &--low#{&}--checked {
      background-color: $ok;
    }

    &--medium {
      color: $warning;
      border: 1px solid $warning;
    }
    &--medium#{&}--checked {
      background-color: $warning;
    }

    &--high {
      color: $danger;
      border: 1px solid $danger;
    }
    &--high#{&}--checked {
      background-color: $danger;
    }

    &--checked {
      color: $white;
    }
  }
}
</style>
