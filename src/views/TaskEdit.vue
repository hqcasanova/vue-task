<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import useTasks from '@/composables/useTasks';
import ActionModal from '@/components/structure/ActionModal.vue';
import PriorityButtons from '@/components/ui/PriorityButtons.vue';

import Task from '@/models/Task';

export type Props = {
  id: string;
};
const props = withDefaults(defineProps<Props>(), {
  id: '',
});

const router = useRouter();
const { updateTask, fetchTask, isLoading } = useTasks();

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

          <priority-buttons
            v-model="task.priority"
            :idPrefix="task.id"
          />
        </fieldset>
      </form>
    </template>
  </ActionModal>
</template>

<style scoped lang="scss">
@import '@/scss/variables.scss';
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
}
</style>
