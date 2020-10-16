<template>
  <div class="home">
    <Header></Header>
    <GlobalSearch></GlobalSearch>
    <main class="main">
      <MainSidebar></MainSidebar>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import MainSidebar from "@/components/MainSidebar.vue";

export default {
  name: "Home",
  components: {
    Header,
    GlobalSearch,
    MainSidebar
  }
};
</script>

<style lang="scss">
.main {
  margin: 42px 0 151px;
  display: flex;
}
</style>
