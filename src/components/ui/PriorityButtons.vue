<script setup lang="ts">
export type Props = {
  priorities?: string[];
  modelValue: string;
  idPrefix: string;
};
export type Emits = {
  (e: 'update:modelValue', keyValue: Props['modelValue']): void;
};

withDefaults(defineProps<Props>(), {
  priorities: JSON.parse(import.meta.env.VITE_PRIORITIES),
});
const emit = defineEmits<Emits>();
</script>

<template>
  <div class="priority-buttons flex flex-wrap">
    <label
      v-for="value in priorities"
      :key="`${idPrefix}-${value}`"
      class="app-btn mr-2.5 mb-2.5 py-2 px-4 first-letter:uppercase font-medium border text-grey border-grey rounded-xl"
      :class="[
        'priority-buttons__btn',
        `priority-buttons__btn--${value}`,
        { 'priority-buttons__btn--checked': value === modelValue },
      ]"
    >
      <input
        class="priority-buttons__radio"
        type="radio"
        :value="value"
        :checked="value === modelValue"
        @change="emit('update:modelValue', value)"
      />
      {{ value }}
    </label>
  </div>
</template>

<style scoped lang="scss">
.priority-buttons {
  &__radio {
    @apply absolute pointer-events-none;
    clip: rect(0, 0, 0, 0);
  }

  &__btn {
    &--low {
      @apply text-ok border-ok;
    }
    &--low#{&}--checked {
      @apply bg-ok;
    }

    &--medium {
      @apply text-warning border-warning;
    }
    &--medium#{&}--checked {
      @apply bg-warning;
    }

    &--high {
      @apply text-danger border-danger;
    }
    &--high#{&}--checked {
      @apply bg-danger;
    }

    &--checked {
      @apply text-white bg-grey;
    }
  }
}
</style>
