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
      class="mr-2 text-sm text-grey"
    >
      {{ name }}
    </dt>
    <dd class="leading-6">
      <slot></slot>
    </dd>
  </div>
</template>

<style scoped lang="scss">
.task-prop {
  &--low {
    @apply text-ok;
  }

  &--medium {
    @apply text-warning;
  }

  &--high {
    @apply text-danger;
  }
}
</style>
