<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav class="navbar custom-navbar" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <RouterLink to="/cards/new" class="navbar-item">Add Card</RouterLink>
            <RouterLink to="/cards" class="navbar-item">My Cards</RouterLink>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  padding: 50px 10px;
}

.custom-navbar {
  padding: 10px;
  border-bottom: 1px solid #0a0a0a1a;
}
</style>
