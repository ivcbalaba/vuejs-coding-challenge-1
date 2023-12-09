<script setup>
import { ref } from 'vue';

const card = ref({
    "card_number": "4444-1000-2000-3000",
    "first_name": "Marcelo",
    "last_name": "Del Pilar",
    "membership_tier": "bronze",
    "user_description": "Marcelo is a very particular customer. He knit-picks everything but he tips very well if you induldge all of his requests."
})
</script>

<template>
    <div class="card">
        <header class="card-header">
            <p class="card-header-title">
                Member Details
            </p>
        </header>
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p>Member Name:</p>
                    <p class="title is-4">{{ card.first_name + ' ' + card.last_name }}</p>
                    <p>Card Number:</p>
                    <p class="title is-6">{{ card.card_number }}</p>
                    <p>Membership Tier:</p>
                    <p class="title is-6">{{ card.membership_tier.toUpperCase() }}</p>
                </div>
            </div>

            <div class="content">
                {{ card.user_description }}
            </div>
        </div>
    </div>
</template>

<style></style>
