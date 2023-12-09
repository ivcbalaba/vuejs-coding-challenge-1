<script setup>
import { ref } from 'vue';
import CardItem from '../components/CardItem.vue'

const cards = ref([
    {
        "card_number": "4444-1000-2000-1000",
        "first_name": "Jose",
        "last_name": "Rizal",
        "membership_tier": "gold"
    },
    {
        "card_number": ">",
        "first_name": "Juan",
        "last_name": "Luna",
        "membership_tier": "silver"
    },
    {
        "card_number": "4444-1000-2000-3000",
        "first_name": "Marcelo",
        "last_name": "Del Pilar",
        "membership_tier": "bronze"
    }
])
</script>

<template>
    <div class="title custom-title">
        <h1>Membership Cards</h1>
    </div>
    <CardItem v-for="card in cards" :key="card.card_number" :card="card"></CardItem>
</template>

<style scoped></style>
