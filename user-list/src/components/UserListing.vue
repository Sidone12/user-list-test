<script setup>
import CustomButton from "./Ui/CustomButton.vue";
import { computed, onMounted } from "vue";
import { useUsersStore } from "../stores/users";
const usersStore = useUsersStore()
onMounted(usersStore.fetchUsers);

const users = computed(() => {
    return usersStore.users;
});
</script>

<template>
    <div>
        <h1 v-if="usersStore.users?.length > 0">This is our users:</h1>
        <h1 v-if="usersStore.users?.length < 1">No users</h1>
        <div class="container_wrapper">

            <div v-for="(user) in usersStore.users" :key="user.id" style="width: 200px;" class="user_wrapper"
                @click="usersStore.setSelectedUser(user.id)">
                <img :src="user.avatar ?? 'https://reqres.in/img/faces/1-image.jpg'" alt="">
                <h2>{{ user.first_name }}</h2>
                <a :href="`mailto:${user.email}`" target="_blank">
                    <p>{{ user.email }}</p>
                </a>

                <CustomButton :type="'danger-btn'" @click.native.stop="usersStore.deleteSingleUser(user.id)"
                    :title="'delete'" />
            </div>
        </div>
    </div>
</template>



<style scoped>
.container_wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
}

.user_wrapper {
    background-color: white;
    border: 1px solid #f8f9fa;
    padding: 10px;
    border-radius: 10px;
}

.user_wrapper:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .3);
}

.user_wrapper img {
    border-radius: 50%;
}
</style>