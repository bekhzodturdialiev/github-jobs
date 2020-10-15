<template>
  <div class="home">
    <Header></Header>
    <GlobalSearch></GlobalSearch>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";

export default {
  name: "Home",
  components: {
    Header,
    GlobalSearch,
  },
};
</script>
