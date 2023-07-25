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
const isNotFound = ref<boolean>(false);
const actionName = computed(() => (props.id ? 'edit' : 'add'));
const isTitleBlank = computed(() => task.value.title.trim().length === 0);

onMounted(async () => {
  if (props.id) {
    const data = await fetchTask(props.id);

    if (!data) {
      isNotFound.value = true;
    } else {
      task.value = data;
    }
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
    actionType="standard"
    :actionName="actionName"
    :is-disabled-action="isLoading || isNotFound"
    @ok="onConfirmedAction"
    @cancel="onCancelAction"
  >
    <template #title>{{ actionName }} task</template>

    <template #default>
      <form class="task-edit relative">
        <div
          v-if="(actionName === 'edit' && isLoading) || isNotFound"
          class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center bg-lighter-grey/60 backdrop-blur-sm"
          :class="{ 'text-danger font-normal': isNotFound }"
        >
          {{ isNotFound ? 'Task could not be found' : 'Loading task data...' }}
        </div>

        <label class="task-edit__entry">
          <span class="task-edit__label">Task</span>
          <input
            v-model="task.title"
            class="block w-full py-3.5 px-[1.125rem] font-normal bg-white border border-light-grey rounded-2xl hover:border-black focus:border-black outline-none"
            :class="{ 'border-dark-danger hover:border-dark-danger': isTouched && isTitleBlank }"
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
.task-edit {
  &__entry {
    @apply mt-6;
  }

  &__label {
    @apply block mb-2.5 font-bold text-grey;
  }
}
</style>
