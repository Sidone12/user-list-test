<script setup>
import CustomInput from '../components/Ui/custominput.vue'
import CustomButton from './Ui/CustomButton.vue';
import { ref } from 'vue'
import { useUsersStore } from "../stores/users";

const usersStore = useUsersStore();

let token = ref('')

</script>

<template>
    <div class="search_container">
        <CustomInput placeholder="Search ... " v-model="token" />
        <CustomButton @click.native="usersStore.setSearchtoken(token)" :title="'Search'"/>
        <CustomButton :type="'danger-btn'" v-if="usersStore.searchtoken?.length > 0" @click.native="usersStore.setSearchtoken('')" :title="'X'"/>
    </div>
</template>



<style  scoped>
.search_container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>