<script setup lang="ts">
export type Props = {
  isProgress: boolean;
};

defineProps<Props>();
</script>

<template>
  <div :class="['horizontal-progress', { 'horizontal-progress--animate': isProgress }]"></div>
</template>

<style scoped lang="scss">
@import '@/scss/mixins.scss';

.horizontal-progress {
  height: calc($base-spacing / 2);
  width: 100%;
  background: transparent;

  &--animate {
    animation: progress 1.5s cubic-bezier(0.2, 0.5, 0.4, 0.7) infinite;
    animation-delay: 0.1s;
    transform: translateX(100%);
    @include gradient-bg($primary);
  }

  @keyframes progress {
    0% {
      transform: translateX(-100%);
    }
    50% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(100%);
    }
  }
}
</style>
