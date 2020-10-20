<template>
  <div>
    <router-link :to="{ name: 'job-show', params: { id: job.id } }">
      <div class="job-card">
        <img
          class="job-card__image"
          v-image-loader
          :src="job.company_logo"
          alt="Company
    Image"
        />
        <div class="job-card__content">
          <h4 class="job-card__company-name">{{ job.company }}</h4>
          <h2 class="job-card__position">{{ job.title }}</h2>
          <div class="job-card-info">
            <div class="job-card__type">
              <span>{{ job.type }}</span>
            </div>
            <div class="job-card__post">
              <p class="job-card__city">
                <i class="material-icons job-card__city-icon">public</i>
                <span>{{ job.location }}</span>
              </p>
              <p class="job-card__post-date">
                <i class="material-icons job-card__post-date-icon"
                  >access_time</i
                >
                <span>{{ postedDay }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
const now = new Date();

export default {
  name: "JobCard",
  props: {
    job: {
      type: Object,
      default: () => ({
        company_logo: "test",
        company: "text",
        test: "Text tEtxt"
      })
    }
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
a {
  color: inherit;
  text-decoration: none;
}
.job-card {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 12px;
  font-size: 0.75em;
  width: calc(100% - 24px);

  margin: 0 0 32px 0;

  @media (max-width: 767px) {
    margin: 0 0 23px 0;
    align-items: start;
  }

  &__image {
    width: 90px;
    margin: 0 16px 0 0;
  }

  &__content {
    width: 100%;
  }

  &__company-name {
    margin: 0 0 8px 0;
    font-weight: 700;
    font-size: 1em;
  }
  &__position {
    margin: 0 0 0 0;
    font-weight: 400;
    font-size: 1.5em;
  }

  &-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #b9bdcf;
    margin: 12px 0 0 0;

    @media (max-width: 767px) {
      flex-direction: column;
      align-items: start;
    }
  }

  &__type {
    border: 1px solid #334680;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 6px 8px;
    color: #334680;
    font-weight: 700;
  }

  &__city {
    display: flex;
    align-items: center;
    margin-right: 28.5px;
    &-icon {
      font-size: 1.25em;
      margin: 0 7.5px 0 0;
    }
  }

  &__post {
    display: flex;
    &-date {
      display: flex;
      align-items: center;

      &-icon {
        font-size: 1.25em;
        margin: 0 8.5px 0 0;
      }
    }
  }
}
</style>
