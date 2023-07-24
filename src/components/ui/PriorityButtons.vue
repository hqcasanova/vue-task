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
  <div class="priority-buttons">
    <label
      v-for="value in priorities"
      :key="`${idPrefix}-${value}`"
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
@import '@/scss/mixins.scss';

.priority-buttons {
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
