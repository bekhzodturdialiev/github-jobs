<template>
  <aside class="main-sidebar">
    <CheckBox>Full stack</CheckBox>
    <h2 class="sidebar-title">Location</h2>
    <form class="sidebar-search">
      <label>
        <i class="material-icons sidebar-search__icon">public</i>
        <input
          class="sidebar-search__text"
          type="text"
          placeholder="City, state, zip code or country"
        />
      </label>
    </form>
    <CheckBox>London</CheckBox>
    <CheckBox>Amsterdam</CheckBox>
    <CheckBox>New York</CheckBox>
    <CheckBox>Berlin</CheckBox>
  </aside>
</template>

<script>
import CheckBox from "@/components/CheckBox.vue";
export default {
  name: "MainSidebar",
  components: {
    CheckBox
  }
};
</script>

<style lang="scss">
.main-sidebar {
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

    &::placeholder {
      color: #b9bdcf;
    }
  }
}
</style>
