<template>
  <header class="header">
    <div class="content">
      <img src="@/assets/logo.png" alt="logo">
      <div class="nav">
        <router-link to="/form">Форма</router-link>
        <router-link to="/preview">Превью</router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>

</script>

<style scoped lang="scss">
.header {
  height: 76px;
  background: white;
  padding: 22px 51px;
  box-shadow: 0 1px 0 0 rgba(17, 17, 17, 0.10);

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 55%;
    flex-wrap: wrap;
    height: inherit;

    img {
      width: 172px;
      height: 30px;
      display: block;
    }

    .nav {
      display: flex;
      align-items: center;
      gap: 30px;

      a {
        color: rgba(17, 17, 17, 0.48);
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        text-decoration: none;
      }
    }
  }

}
</style>
