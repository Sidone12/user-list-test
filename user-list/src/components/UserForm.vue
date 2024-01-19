<script lang="ts" setup>
import CustomInput from '../components/Ui/CustomInput.vue';
import { FormData } from '../api/types'
import { ref } from 'vue';
import { useUsersStore } from "../stores/users";

const usersStore = useUsersStore();

const formData = ref<FormData>({
    first_name: '',
    email: '',
});

const isEmailValid = ref(false);

const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    isEmailValid.value = emailRegex.test(formData.value.email);

    if (!formData.value.first_name.trim()) {
        alert('Будь ласка, введіть ім\'я');
        return;
    }

    if (!isEmailValid.value) {
        alert('Невірний формат електронної пошти!');
        return;
    }

    usersStore.addUser({
        first_name: formData.value.first_name,
        email: formData.value.email,
    });

    formData.value.first_name = '';
    formData.value.email = '';
};

</script>

<template>
    <form @submit.prevent="handleSubmit" class="form_wrapper">
        <CustomInput placeholder="First Name" v-model="formData.first_name" />
        <CustomInput placeholder="Email" v-model="formData.email" />
        <button class="btn" type="submit">Create</button>
    </form>
</template>

<style scoped>
.form_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn {
    height: 40px;
    font-size: 16px;
    font-weight: 600;
    padding: 5px 20px 5px 20px;
    border-radius: 10px;
    border: none;
    color: white;
    background-color: hsla(160, 100%, 37%, 1);
}
</style>