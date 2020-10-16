<template>
  <div class="home">
    <Header></Header>
    <GlobalSearch></GlobalSearch>
    <main class="main">
      <MainSidebar></MainSidebar>
      <section>
        <div class="job-cards">
          <JobCard></JobCard>
        </div>
        <div class="pagination"></div>
      </section>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import MainSidebar from "@/components/MainSidebar.vue";
import JobCard from "@/components/JobCard.vue";

export default {
  name: "Home",
  components: {
    Header,
    GlobalSearch,
    MainSidebar,
    JobCard
  }
};
</script>

<style lang="scss">
.main {
  margin: 42px 0 151px;
  display: flex;
}
.job-cards {
  margin: 0 0 0 32px;
  width: 766px;
}
</style>
