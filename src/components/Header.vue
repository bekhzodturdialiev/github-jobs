<template>
  <header class="header">
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
  font: 400 1.5em "Poppins", sans-serif;
  text-transform: capitalize;
  color: #282538;
  margin: 32px 0;
  @media (max-width: 767px) {
    margin: 12px 0 32px;
  }

  &-bold {
    font-weight: 700;
  }
}
</style>
