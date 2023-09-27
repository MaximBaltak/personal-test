<template>
  <div class="card">
    <p>{{ children.name }}, {{ children.age }} {{ pluralize(+children.age, 'год', 'года', 'лет') }}</p>
  </div>
</template>

<script setup lang="ts">
import {pluralize} from 'numeralize-ru'
import {defineProps} from 'vue'
import {Children} from "@/types/children";

defineProps<{
  children: Children
}>()
</script>

<style scoped lang="scss">
.card {
  display: flex;
  align-items: center;
  justify-content: start;
  padding: 10px;
  border-radius: 5px;
  background: #F1F1F1;
  margin-top: 20px;

  p {
    margin: 0;
    color: black;
    font-size: 16px;
    font-weight: 700;
  }
}

</style>
