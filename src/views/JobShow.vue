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
              class="job-block-image"
              v-image-loader
              :src="job.company_logo"
              alt="Company Image"
            />
            <div class="job-card__header">
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
  </div>
</template>

<script>
import InfoSidebar from "@/components/InfoSidebar.vue";
import Header from "@/components/Header.vue";
import noImage from "@/assets/images/no-image.png";
const now = new Date();
export default {
  data() {
    return {
      noImage: noImage
    };
  },
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
    },
    companyLogo() {
      return this.job.company_logo || this.noImage;
    }
  }
};
</script>

<style lang="scss">
.job-show {
  margin: 0 15px;
}
.job-block-image {
  width: 90px;
}
.job-block {
  margin-left: 78px;
  @media (max-width: 767px) {
    & {
      margin-left: 0;
    }
  }
}
.job-description {
  color: #334680;
  line-height: 150%;
}
.job-header {
  display: flex;
  align-items: center;
  @media (max-width: 767px) {
    & {
      flex-direction: column;
      align-items: start;
    }
  }
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

  @media (max-width: 767px) {
    & {
      margin: 10px 0 0 0;
    }
  }
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
  padding: 0;
}
.job-card__header {
  margin-left: 12px;
}
</style>
