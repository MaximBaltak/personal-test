<template>
  <div class="form">
    <div class="content">
      <UserCard v-for="user in users" :key="user.id" :user="user"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCard from "@/components/UserCard.vue";
import {storeToRefs} from "pinia";
import {useAppStore} from "@/store/app-store";

const {users} = storeToRefs(useAppStore())

</script>

<style scoped lang="scss">
.form {
  width: 616px;
  @media screen and (max-width: 661px) {
    width: 100%;
    max-width: none;
  }
}

.content {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.title {
  margin: 30px 0 0;
  color: #111;
  font-size: 16px;
  font-weight: 500;
}

.text {
  color: black;
  font-size: 16px;
  font-weight: 700;
}

.cards {
  width: 300px;
}
</style>
