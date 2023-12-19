<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useApiStore } from '../stores/apiStore.js';

const apiStore = useApiStore();
const router = useRouter();

const { addCard } = apiStore;
const formData = ref({
  first_name: '',
  last_name: '',
  email: '',
  card_number: '',
  membership_tier: 'Gold',
});

const onSubmit = async () => {
  formData.value.card_number = formData.value.card_number.toString();
  await addCard(formData.value)
  router.push('/cards')
};
</script>

<template>
  <div class="card-form-container">
    <h3 class="title is-3">Add a Member Card</h3>
    <form>
      <div class="field">
        <label class="label">First Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Member first name" v-model="formData.first_name" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Last Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Member last name" v-model="formData.last_name" required>
        </div>
      </div>

      <div class="field">
        <label class="label">E-mail Address</label>
        <div class="control">
          <input class="input" type="email" placeholder="Member e-mail" v-model="formData.email" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Card Number</label>
        <div class="control">
          <input class="input" type="number" placeholder="Card Number" v-model="formData.card_number" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Membership Tier</label>
        <label class="radio">
          <input type="radio" name="membership-tier" value="Gold" v-model="formData.membership_tier" checked>
          Gold
        </label>
        <label class="radio">
          <input type="radio" name="membership-tier" value="Silver" v-model="formData.membership_tier">
          Silver
        </label>
        <label class="radio">
          <input type="radio" name="membership-tier" value="Platinum" v-model="formData.membership_tier">
          Platinum
        </label>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" @click.prevent="onSubmit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
