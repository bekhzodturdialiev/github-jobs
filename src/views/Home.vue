<template>
  <div class="home">
    <Header></Header>
    <GlobalSearch></GlobalSearch>
    <main class="main">
      <MainSidebar></MainSidebar>
      <div class="job-cards">
        <JobCard v-for="job in job.jobs" :key="job.id" :job="job" />
        <Pagination :page="page" />
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import GlobalSearch from "@/components/GlobalSearch.vue";
import MainSidebar from "@/components/MainSidebar.vue";
import JobCard from "@/components/JobCard.vue";
import Pagination from "@/components/Pagination.vue";

import store from "@/store";
import { mapState } from "vuex";

const fetchData = (routeTo, next) => {
  const params = routeTo.query;
  const currentPage = parseInt(routeTo.query.page) || 1;
  params.page = currentPage;
  store
    .dispatch("job/fetchJobs", {
      params: params
    })
    .then(() => {
      routeTo.params.page = currentPage;
      next();
    });
};

export default {
  name: "Home",
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  components: {
    Header,
    GlobalSearch,
    MainSidebar,
    JobCard,
    Pagination
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    fetchData(routeTo, next);
  },
  beforeRouteUpdate(routeTo, routeFrom, next) {
    fetchData(routeTo, next);
  },
  computed: {
    ...mapState(["job"])
  }
};
</script>

<style lang="scss">
.home {
  margin: 0 15px;
}
.main {
  margin: 33px 0 151px;
  display: flex;

  @media (max-width: 767px) {
    & {
      flex-direction: column;
      margin: 25px 0;
    }
  }
}
.job-cards {
  width: calc(75% - 32px);
  margin: 0 0 0 32px;
  @media (max-width: 767px) {
    & {
      width: 100%;
      margin: 9px 0 0 0;
    }
  }
}
// @media (max-width: 1200px) {
//   .job-cards {
//     width: 766px;
//   }
// }
</style>
