<template>
  <DefaultLayout>
    <router-view/>
  </DefaultLayout>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-flow: column;
  height: 100%;
  box-sizing: border-box;
}

</style>
<script>
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  components: {DefaultLayout}
}
</script>
