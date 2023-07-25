<script setup lang="ts">
import { computed } from 'vue';

export type Props = {
  strokeWidth?: number;
  sqSize?: number;
  percentage?: number;
};

const props = withDefaults(defineProps<Props>(), {
  strokeWidth: 2,
  sqSize: 24,
  percentage: 0,
});

const strokeWidthString = computed(() => `${props.strokeWidth}px`);
const transformString = computed(() => `rotate(-90 ${props.sqSize / 2} ${props.sqSize / 2})`);
const radius = computed(() => (props.sqSize - props.strokeWidth) / 2);
const circleCoord = computed(() => props.sqSize / 2);
const viewBox = computed(() => `0 0 ${props.sqSize} ${props.sqSize}`);
const dashArray = computed(() => radius.value * Math.PI * 2);
const dashOffset = computed(
  () => dashArray.value - (dashArray.value * (props.percentage || 0)) / 100
);
</script>

<template>
  <svg
    class="circular-progressbar block"
    :width="sqSize"
    :height="sqSize"
    :viewBox="viewBox"
  >
    <circle
      class="circular-progressbar__circle stroke-lighter-grey"
      :cx="circleCoord"
      :cy="circleCoord"
      :r="radius"
    />
    <circle
      class="circular-progressbar__circle circular-progressbar__circle--progress"
      :cx="circleCoord"
      :cy="circleCoord"
      :r="radius"
      :transform="transformString"
    />
  </svg>
</template>

<style scoped lang="scss">
.circular-progressbar {
  &__circle {
    @apply fill-none;
    stroke-width: v-bind(strokeWidthString);

    &--progress {
      @apply stroke-primary transition-dashoffset;
      stroke-linecap: round;
      stroke-dasharray: v-bind(dashArray);
      stroke-dashoffset: v-bind(dashOffset);
    }
  }
}
</style>
