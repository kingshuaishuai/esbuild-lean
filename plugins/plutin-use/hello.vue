<script lang="ts" setup>
import {ref} from 'vue'

const count = ref(0)
const handleAdd = () => {
  count.value++
}

</script>

<template>
  <div>
    <div class="container">current count: {{ count }}</div>
    <button class="btn" @click="handleAdd">add count</button>
  </div>
</template>

<style scoped>
.container {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
.btn {
  background: skyblue;
  border-radius: 4px;
  padding: 6px 12px;
  border: none;
  cursor: pointer;
}
</style>