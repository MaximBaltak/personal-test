<template>
  <button :style="{width,height}" @click="click">{{ text }}</button>
</template>

<script setup lang="ts">
import {defineProps, withDefaults} from "vue";

withDefaults(defineProps<{
  text: string,
  click: () => void,
  width?: string
  height?: string
}>(), {
  width: '118px',
  height: '44px'
})

</script>

<style scoped lang="scss">
button {
  outline: none;
  border: none;
  border-radius: 100px;
  display: block;
  background: #01A7FD;
  cursor: pointer;
  color: #FFFFFF;
  font-size: 14px;
  font-weight: 400;
}
</style>
