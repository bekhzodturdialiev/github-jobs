<template>
  <header>
    <h1 class="logo_title"><span class="logo_title-bold">github</span> jobs</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss" scoped>
.logo_title {
  font: 400 24px "Poppins", sans-serif;
  text-transform: capitalize;
  color: #282538;
  &-bold {
    font-weight: 700;
  }
}
</style>
