<script setup>
import UserListing from '../components/UserListing.vue'
import UserView from '../components/UserView.vue';
import UserForm from '../components/UserForm.vue'
import SerchForm from '../components/SerchForm.vue';
</script>

<template>
<main class="container">
    <SerchForm />
    <UserForm/>
    <UserListing />
    <UserView/>
</main>
</template>

<style scoped>
.container {
    max-width: 700px;
}
</style>