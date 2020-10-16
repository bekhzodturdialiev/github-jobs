<template>
  <div class="home">
    <Header></Header>
    <GlobalSearch></GlobalSearch>
    <CheckBox>Full stack</CheckBox>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import CheckBox from "@/components/CheckBox.vue";

export default {
  name: "Home",
  components: {
    Header,
    GlobalSearch,
    CheckBox
  }
};
</script>
