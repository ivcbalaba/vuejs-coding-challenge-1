<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

</script>

<template>
  <div>
    <NavBar />
    <div class="container">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: 50px auto;
  padding: 50px 10px;
}

.custom-navbar {
  padding: 10px;
  border-bottom: 1px solid #0a0a0a1a;
}
</style>
