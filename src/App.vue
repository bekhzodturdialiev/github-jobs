<template>
  <div id="app">
    <div class="wrapper">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<style lang="scss">
.wrapper {
  width: 100%;
  max-width: 1201px;
  margin: 0 auto;
}
</style>
