<template>
  <button class="btn" :class="type">{{ title }}
  </button>
</template>
  
<script setup>
defineProps({
  type: String,
  title: String,
})
</script>

<style scoped>
.btn{
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  padding: 5px 20px 5px 20px;
  border-radius: 10px;
  border: none;
  color: white;
  background-color: #2c3e50;
}

.btn-sucess {
  background-color: hsla(160, 100%, 37%, 1);
}

.danger-btn {
  background-color: hsl(9, 86%, 72%, 1);
}

.btn-sucess:hover,
.danger-btn:hover {
  box-shadow: 0 2px 2px rgba(0, 0, 0, .2);
}
</style>