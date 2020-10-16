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
        <div class="pagination">
          <div class="pagination__button">
            <i class="material-icons">chevron_left</i>
          </div>
          <div class="pagination__button pagination__button-active">
            1
          </div>
          <div class="pagination__button">
            <i class="material-icons">chevron_right</i>
          </div>
        </div>
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
  section {
    margin: 0 0 0 32px;
  }
}
.job-cards {
  width: 766px;
}
.pagination {
  display: flex;
  justify-content: flex-end;
  &__button {
    width: 36px;
    height: 36px;
    border: 1px solid #b7bcce;
    border-radius: 4px;
    color: #b7bcce;
    font-size: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:not(:first-child) {
      margin: 0 0 0 12px;
    }
    &-active {
      color: #fff;
      background: #1e86ff;
    }
    &:hover {
      color: #1e86ff;
      border: 1px solid #1e86ff;
    }
  }
}
</style>
