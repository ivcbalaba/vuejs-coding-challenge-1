<script setup>
const props = defineProps(['card'])
</script>

<template>
    <div class="card">
        <div class="card-content">
            <div class="media">
                <div class="media-content">
                    <p class="title is-4">{{ card.first_name + ' ' + card.last_name }}</p>
                </div>
            </div>


            <div class="content">
                <div class="block">
                    Card Number: <strong>
                        <router-link :to="{ name: 'CardDetails', params: { cardNumber: card.card_number } }">
                            {{ card.card_number }}</router-link></strong>
                </div>
                <div class="block">
                    Membership Tier: <strong>{{ card.membership_tier ? card.membership_tier.toUpperCase() : 'N/A'
                    }}</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    margin-top: 50px;
}
</style>

