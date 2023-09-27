<template>
  <div class="wrapper" :style="{width}">
    <label :for="id">{{ title }}</label>
    <input :style="{width}" type="text" :id="id" :value="modelValue"
           @change="emit('update:modelValue',$event.target.value)">
  </div>
</template>

<script setup lang="ts">
import {defineEmits, defineProps, withDefaults} from "vue";

withDefaults(defineProps<{
  title: string,
  id: string,
  modelValue?: string,
  width: string,
}>(), {
  modelValue: ''
})
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

</script>

<style scoped lang="scss">
.wrapper {
  position: relative;
  margin-top: 10px;

  label {
    position: absolute;
    color: rgba(17, 17, 17, 0.48);
    font-weight: 400;
    font-size: 13px;
    transform: translate(9px, 9px);
  }

  input {
    padding: 9px;
    height: 47px;
    border-radius: 4px;
    border: 1px solid #F1F1F1;
    background: #FFF;
    outline: none;
    display: block;
    color: black;
    font-size: 14px;
    font-weight: 400;
  }
}
</style>
