<script setup lang="ts">
import { computed } from 'vue';

type Props = {
  name?: string;
  priority?: string;
};

const props = withDefaults(defineProps<Props>(), {
  name: '',
  priority: '',
});

const rootClass = computed(() => {
  let className = 'task-prop';

  if (props.priority.length === 0) {
    return className;
  }

  return `${className} ${className}--${props.priority}`;
});
</script>

<template>
  <div :class="rootClass">
    <dt
      v-if="name.length"
      class="task-prop__name"
    >
      {{ name }}
    </dt>
    <dd class="task-prop__value">
      <slot></slot>
    </dd>
  </div>
</template>

<style scoped lang="scss">
@import '@/scss/variables.scss';
.task-prop {
  &--low {
    color: $ok;
  }

  &--medium {
    color: $warning;
  }

  &--high {
    color: $danger;
  }

  &__name {
    margin-right: 0.5em;
    font-size: 0.875em;
    line-height: 1.5em;
    color: $grey;
  }

  &__value {
    line-height: 1.5em;
  }
}
</style>
