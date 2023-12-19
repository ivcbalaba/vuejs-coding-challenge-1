<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
    <nav class="navbar is-fixed-top custom-navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <RouterLink :to="{ name: 'AddCard' }" class="navbar-item">Add Card</RouterLink>
            <RouterLink :to="{ name: 'CardList' }" class="navbar-item">My Cards</RouterLink>
        </div>
    </nav>
</template>