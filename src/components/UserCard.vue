<template>
  <div class="card">
    <div>
      <p class="title">Персональные данные</p>
      <p class="text">{{ user.name }}, {{ user.age }} {{ pluralize(+user.age, 'год', 'года', 'лет') }}</p>
    </div>
    <div v-if="user.children.length" class="children">
      <p class="title">Дети</p>
      <div class="cards">
        <ChildrenCard v-for="children in user.children" :key="children.id" :children="children"/>
      </div>
    </div>
    <p v-else class="title">Детей нет</p>
  </div>
</template>

<script setup lang="ts">
import {pluralize} from 'numeralize-ru'
import {defineProps} from 'vue'
import ChildrenCard from './ChildrenCard.vue'
import {User} from "@/types/user";

defineProps<{
  user: User
}>()
</script>

<style scoped lang="scss">
.text {
  margin: 0;
  color: black;
  font-size: 16px;
  font-weight: 700;
}
</style>
