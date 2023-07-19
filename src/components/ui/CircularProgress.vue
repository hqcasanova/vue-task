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
    class="circular-progressbar"
    :width="sqSize"
    :height="sqSize"
    :viewBox="viewBox"
  >
    <circle
      class="circular-progressbar__circle circular-progressbar__circle--background"
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
@import '@/scss/variables.scss';
.circular-progressbar {
  display: block;

  &__circle {
    fill: none;
    stroke-width: v-bind(strokeWidthString);

    &--background {
      stroke: $lighter-grey;
    }

    &--progress {
      stroke: $primary;
      stroke-linecap: round;
      stroke-dasharray: v-bind(dashArray);
      stroke-dashoffset: v-bind(dashOffset);
      transition: stroke-dashoffset $base-delay ease 0s;
    }
  }
}
</style>
