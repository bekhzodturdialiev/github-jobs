<template>
  <aside class="main-sidebar">
    <CheckBox checkvalue="full_time" type="checkbox" name="type"
      >Full stack</CheckBox
    >
    <h2 class="sidebar-title">Location</h2>
    <form class="sidebar-search">
      <label>
        <i class="material-icons sidebar-search__icon">public</i>
        <input
          class="sidebar-search__text"
          type="text"
          placeholder="City, state, zip code or country"
          v-model="params.location"
          @input="processSearch"
        />
      </label>
    </form>
    <CheckBox checkvalue="London" type="radio" name="location">London</CheckBox>
    <CheckBox checkvalue="Amsterdam" type="radio" name="location"
      >Amsterdam</CheckBox
    >
    <CheckBox checkvalue="New York" type="radio" name="location"
      >New York</CheckBox
    >
    <CheckBox checkvalue="Berlin" type="radio" name="location">Berlin</CheckBox>
  </aside>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";

import store from "@/store";

export default {
  name: "MainSidebar",
  components: {
    CheckBox
  },
  data: function() {
    return {
      params: {}
    };
  },
  methods: {
    processSearch() {
      if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
      }
      this.timer = setTimeout(() => {
        store.dispatch("job/fetchJobs", {
          params: this.params
        });
      }, 800);
    }
  }
};
</script>

<style lang="scss">
.main-sidebar {
  width: 25%;
  @media (max-width: 767px) {
    & {
      width: 100%;
    }
  }
}
.sidebar-title {
  font: 700 0.875em "Poppins";
  text-transform: uppercase;
  color: #b9bdcf;
  margin: 32px 0 14px;
}
.sidebar-search {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  margin: 0 0 25px 0;

  label {
    display: flex;
    align-items: center;
  }

  &__icon {
    color: #b9bdcf;
    margin: 17px 16px 16px 14px;
  }
  &__text {
    font-size: 0.75em;
    color: #b9bdcf;
    border: none;
    outline: none;
    margin: 0 16px 0 0;
    width: 100%;

    &::placeholder {
      color: #b9bdcf;
    }
  }
}
</style>
