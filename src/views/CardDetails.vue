<script setup>

import { ref, onMounted } from 'vue';
import { useApiStore } from '../stores/apiStore.js';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';

const apiStore = useApiStore();
const route = useRoute();
const { card } = storeToRefs(apiStore);
const { fetchOneCard } = apiStore;

const isLoading = ref(false);

const loadCardData = async () => {
    isLoading.value = true;
    const cardNumber = route.params.cardNumber;
    await fetchOneCard(cardNumber);
    isLoading.value = false;
};

onMounted(loadCardData);


</script>

<template>
    <div v-if="!isLoading && card !== null && card !== undefined" class="card">
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
                    <p>Member Email:</p>
                    <p class="title is-6">{{ card.email }}</p>
                    <p>Card Number:</p>
                    <p class="title is-6">{{ card.card_number }}</p>
                    <p>Membership Tier:</p>
                    <p class="title is-6">{{ card.membership_tier ? card.membership_tier.toUpperCase() : "N/A" }}</p>
                    <p>Member Points:</p>
                    <p class="title is-6">{{ card.points }}</p>
                </div>
            </div>
        </div>
    </div>
    <div v-else-if="isLoading">
        Loading...
    </div>
    <div v-else>
        No card found.
    </div>
</template>

<style></style>
