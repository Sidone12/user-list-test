<template>
    <div>   
        <button @click="editForm = !editForm">{{ buttonText}}</button>
    </div>
</template>

<script setup>
import { computed, ref } from 'vue';

let editForm = ref(false)
let buttonText = computed(() => {

    return  editForm ? 'Edit':'Close'
})

</script>

<style lang="scss" scoped>

</style>