<template>
  <button :style="{width,height}" @click="click">
    <img src="@/assets/plus.svg" alt="plus">
    <p>{{ text }}</p>
  </button>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue";

withDefaults(defineProps<{
  text: string,
  click: () => void,
  width?: string
  height?: string
}>(), {
  width: '204px',
  height: '44px'
})

</script>

<style scoped lang="scss">
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  outline: none;
  border-radius: 100px;
  background: white;
  cursor: pointer;
  color: #01A7FD;
  font-size: 14px;
  font-weight: 400;
  border: solid 1px #01A7FD;
}
</style>
