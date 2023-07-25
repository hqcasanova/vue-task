<script setup lang="ts">
export type Props = {
  isProgress: boolean;
};

defineProps<Props>();
</script>

<template>
  <div
    class="loading-bar w-full h-1 bg-gradient-to-l from-primary translate-x-full"
    :class="{ 'animate-loading': isProgress }"
  ></div>
</template>
