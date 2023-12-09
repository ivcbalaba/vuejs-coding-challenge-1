<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const firstName = ref('');
const lastName = ref('');
const membershipTier = ref('');
const userDescription = ref('');
const memberDetails = {};


const onSubmit = () => {
  memberDetails.firstName = firstName.value;
  memberDetails.lastName = lastName.value;
  memberDetails.membershipTier = membershipTier.value;
  memberDetails.userDescription = userDescription.value;
  alert(JSON.stringify(memberDetails, null, 2));
  router.push('/cards')
};
</script>

<template>
  <div class="card-form-container">
    <h3 class="title is-3">Add a Member Card</h3>
    <div class="field">
      <label class="label">First Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Member first name" v-model="firstName">
      </div>
    </div>

    <div class="field">
      <label class="label">Last Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="Member last name" v-model="lastName">
      </div>
    </div>

    <div class="field">
      <label class="label">Membership Tier</label>
      <label class="radio">
        <input type="radio" name="membership-tier" v-model="membershipTier">
        Gold
      </label>
      <label class="radio">
        <input type="radio" name="membership-tier" checked v-model="membershipTier">
        Silver
      </label>
      <label class="radio">
        <input type="radio" name="membership-tier" checked v-model="membershipTier">
        Platinum
      </label>
    </div>

    <div class="field">
      <label class="label">Member Description</label>
      <div class="control">
        <textarea class="textarea" placeholder="Provide a short description about the member..."
          v-model="userDescription"></textarea>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link" @click.prevent="onSubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
