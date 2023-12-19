<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <header>
      <div>
        <nav class="navbar is-fixed-top custom-navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" class="navbar-menu">
            <div class="navbar-start">
              <RouterLink :to="{ name: 'AddCard' }" class="navbar-item">Add Card</RouterLink>
              <RouterLink :to="{ name: 'CardList' }" class="navbar-item">My Cards</RouterLink>
            </div>
          </div>
        </nav>
      </div>
    </header>

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
