<template>
  <div>
    <div class="job-card">
      <img
        class="job-card__image"
        src="https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaHlNIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--47e113eed4cafcf43cb92c4a41dd359b59567892/Frame%202.png"
        alt="Company Image"
      />
      <div class="job-card__content">
        <h4 class="job-card__company-name">Kasisto</h4>
        <h2 class="job-card__position">Front-End Software Engineer</h2>
        <div class="job-card-info">
          <div class="job-card__type">
            <span>Full time</span>
          </div>
          <div class="job-card__post">
            <p class="job-card__city">
              <i class="material-icons job-card__city-icon">public</i>
              <span>NY or LA</span>
            </p>
            <p class="job-card__post-date">
              <i class="material-icons job-card__post-date-icon">access_time</i>
              <span>5 days ago</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
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
    align-items: flex-end;
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
      align-items: flex-end;

      &-icon {
        font-size: 1.25em;
        margin: 0 8.5px 0 0;
      }
    }
  }
}
</style>
