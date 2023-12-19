<script setup>
import { ref, onMounted } from 'vue';
import CardItem from '../components/CardItem.vue'
import { useApiStore } from '../stores/apiStore.js';

const apiStore = useApiStore();

onMounted(() => {
    apiStore.fetchAllCards();
});
</script>

<template>
    <div class="title custom-title">
        <h3 class="title is-3">Membership Cards</h3>
    </div>
    <CardItem v-for="card in apiStore.data" :key="card.card_number" :card="card"></CardItem>
</template>

<style scoped></style>
