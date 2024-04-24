<script setup>
defineProps({
    modelValue: {
        type: [String, Number],
        default: ''
    },
    placeholder: {
        type: String,
        default: ''
    }
})
</script>

<template>
<div class="input_wrapper">
    <input :placeholder="placeholder" :value="modelValue" v-bind="$attrs" @input=" $emit('update:modelValue', $event.target.value)" class="input_field" type="text">
</div>
</template>



<style scoped>
.input_wrapper {
    margin: 10px;
}

.input_field {
    border: 1px solid #dadce0;
    border-radius: 5px;
    height: 30px;
    padding: 5px;
    font-size: 16px;
    box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .3);
}
</style>