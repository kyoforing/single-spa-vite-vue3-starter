<script setup lang="ts">
import { ref } from 'vue';

defineProps({
  title: String
});
const count = ref(0);
const increment = () => {
  count.value++;
};
</script>

<template>
  <h1>{{ title }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Documentation </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="increment">count is: {{ count }}</button>
</template>
