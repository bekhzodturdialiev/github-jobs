<template>
  <div class="job-show">
    <Header></Header>
    <main class="main">
      <InfoSidebar :how="job.how_to_apply"></InfoSidebar>
      <section>
        <div class="job-block">
          <div class="job-header">
            <h3 class="job-title">{{ job.title }}</h3>
            <div class="job-type">
              <span>{{ job.type }}</span>
            </div>
          </div>
          <p class="job-post-date">
            <i class="material-icons job-card__post-date-icon">access_time</i>
            <span>{{ postedDay }}</span>
          </p>
          <div class="job-card job-block-card">
            <img
              class="job-card__image job-block-image"
              :src="
                job.company_logo ||
                  'http://www.noemiaalugueis.com.br/assets/images/no-image.png'
              "
              alt="Company
    Image"
            />
            <div>
              <h4 class="job-card__company-name">{{ job.company }}</h4>
              <p class="job-card__city">
                <i class="material-icons job-card__city-icon">public</i>
                <span>{{ job.location }}</span>
              </p>
            </div>
          </div>
          <div class="job-description" v-html="job.description"></div>
        </div>
      </section>
    </main>
    {{ job.company }}
  </div>
</template>

<script>
import InfoSidebar from "@/components/InfoSidebar.vue";
import Header from "@/components/Header.vue";
const now = new Date();
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  components: {
    InfoSidebar,
    Header
  },
  computed: {
    postedDay() {
      const postCreated = new Date(this.job.created_at);
      const diff = now - postCreated;
      const daysPast = Math.ceil(diff / (1000 * 3600 * 24));
      if (!daysPast) {
        return "today";
      }
      return daysPast + (daysPast === 1 ? " day ago" : " days ago");
    }
  }
};
</script>

<style lang="scss">
.job-block-image {
  width: 42px;
}
.job-block {
  margin-left: 78px;
}
.job-description {
  color: #334680;
  line-height: 150%;
}
.job-header {
  display: flex;
  align-items: center;
}
.job-title {
  margin: 0;
  font-weight: 700;
  font-size: 1.5em;
  color: #334680;
  max-width: 80%;
}
.job-type {
  border: 1px solid #334680;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 6px 8px;
  margin: 0 0 0 25px;
  color: #334680;
  font-weight: 700;
  font-size: 0.75em;
}
.job-post-date {
  margin: 10px 0;
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 0.75em;
  color: #b7bcce;
}
.job-block-card {
  margin: 32px 0;
  background: transparent;
  box-shadow: none;
}
</style>
