<template>
  <HeaderComponent/>
  <div class="container">
    <slot></slot>
  </div>
  <FooterComponent/>
</template>

<script setup lang="ts">

import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style scoped lang="scss">
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  flex: 1;
  @media screen and (max-width: 661px) {
    width: 80%;
    max-width: none;
  }
}
</style>
