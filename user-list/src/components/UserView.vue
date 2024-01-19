<script setup>
import { computed, ref } from 'vue';
import { useUsersStore } from "../stores/users";
import CustomInput from '../components/Ui/CustomInput.vue'
import CustomButton from './Ui/CustomButton.vue';
const usersStore = useUsersStore()

let user = computed(() => {
    return usersStore.user;
});

let editForm = ref(false)

let buttonText = computed(() => {
    return editForm.value ? 'Close' : 'Edit'
})
const editData = ref({
    tel: '',
    address: '',
})

const isValidPhoneNumber = (phoneNumber) => {
    const phoneRegex = /^(\+38)?\d{10}$/;
    return phoneRegex.test(phoneNumber);
}

const isValidUkrainianAddress = (address) => {
    if (!address.trim()) {
        alert('Address cannot be empty. Please enter a valid Ukrainian address.');
        return false;
    }

    const minLength = 5;
    const maxLength = 100;

    const validCharsRegex = /^[a-zA-Z0-9\s,.#-]+$/;

    if (address.length < minLength || address.length > maxLength) {
        alert('Invalid address length. Please enter a valid Ukrainian address.');
        return false;
    }

    if (!validCharsRegex.test(address)) {
        alert('Invalid characters in the address. Please enter a valid Ukrainian address.');
        return false;
    }


    return true;
}

const addNewData = () => {

    if (!isValidPhoneNumber(editData.value.tel)) {
        alert('Invalid phone number. Please enter a valid Ukrainian phone number.');
        return;
    }
    if (!isValidUkrainianAddress(editData.value.address)) {
        return;
    }

    usersStore.addNewDataToUser({
        tel: editData.value.tel,
        address: editData.value.address,
    })

    editData.value.tel = '';
    editData.value.address = '';
}

</script>


<template>
    <Transition name="modal">
        <div v-if="usersStore.user?.id" class="modal-mask">
            <div class="modal-container">
                <div class="modal-info-container">
                    <img class="modal-avatar" :src="user.avatar ?? 'https://reqres.in/img/faces/1-image.jpg'" alt="">
                    <div class="modal_info-wrapper">
                        <CustomButton :type="'btn'" @click.native="usersStore.setModalVizibility" :title="'X'" />
                        <h1>{{ user.first_name }}</h1>
                        <h2>Email: {{ user.email }}</h2>
                        <p>Tel: {{ user.tel }}</p>
                        <p>Address: {{ user.address }}</p>
                        <CustomButton  @click.native="editForm = !editForm" :title="buttonText" />
                    </div>
                </div>
                <div v-if="editForm" class="edit-container">
                    <CustomInput placeholder="+38XXXXXXXXXX" v-model="editData.tel" />
                    <CustomInput placeholder="Add address" v-model="editData.address" />
                    <CustomButton @click.native="addNewData" :title="'Add info'" :type="'btn-sucess'" />
                </div>
            </div>
        </div>
    </Transition>
</template>


<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    transition: opacity 0.3s ease;
}

.modal-container {
    width: 600px;
    margin: auto;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
}

.modal-info-container {
    display: flex;
    gap: 20px;
}

.edit-container {
    margin-top: 20px;
}

.modal-avatar {
    width: 150px;
    height: 150px;
}

.modal_info-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.modal_info-wrapper button {
    margin-left: auto;
}

.modal-container h1 {
    font-weight: 600;
}

.modal-enter-from {
    opacity: 0;
}

.modal-leave-to {
    opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
</style>



<!-- <script setup>
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useUsersStore } from "../stores/users";
const route = useRoute();


const usersStore = useUsersStore()
onMounted(usersStore.fetchUsers);

const user = computed(() => {
    return usersStore.users.filter(el => el.id == route.params.id);
});
</script>

<template>
    <div class="user_modal_wrapper">
        <img class="avatar" :src="user.avatar" alt="">
        <div>
            <h1>{{ user.first_name }}</h1>
            <a :href="`mailto:${user.email}`" target="_blank">
                <p>{{ user.email }}</p>
            </a>
           
        </div>
    </div>
</template>


<style scoped>
.user_modal_wrapper {
    display: flex;
    background-color: white;
    border: 1px solid #f8f9fa;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    width: 400px;
}

h1 {
    font-weight: 600;
}

.user_wrapper:hover {
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .3);
}

.user_wrapper img {
    border-radius: 50%;
}
</style> -->