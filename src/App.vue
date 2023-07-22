<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap');
@import '@/scss/variables.scss';

body {
  font-family: 'Poppins', sans-serif;
  background: $lightest-grey;
}

svg {
  width: 1em;
  height: 1em;
}
</style>
