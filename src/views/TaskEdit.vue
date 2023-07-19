<script setup lang="ts">
export type Props = {
  id: string;
};

withDefaults(defineProps<Props>(), {
  id: '',
});
</script>

<template>
  <div></div>
</template>
