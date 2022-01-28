<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue';
const title = import.meta.env.VITE_APP_TITLE;
</script>

<template>
  <div id="starter">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld :title="title" />
  </div>
</template>

<style>
#starter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
