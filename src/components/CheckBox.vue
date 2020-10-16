<template>
  <label class="search-criteria">
    <input type="checkbox" class="search-criteria__checkbox" />
    <span class="search-criteria__icon"></span>
    <span class="search-criteria__title"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: "CheckBox"
};
</script>

<style lang="scss">
.search-criteria {
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;
  &__icon {
    font-size: 1em;
    display: inline-block;

    &:after {
      display: inline-block;
      vertical-align: middle;
      font-size: 1.5em;
      font-family: "Material Icons";
    }
  }
  &__checkbox {
    display: none;
  }
  &__checkbox:not(:checked) ~ &__icon:after {
    content: "\e835";
    color: #b9bdcf;
    margin: -3px;
  }
  &__checkbox:checked ~ &__icon:after {
    content: "\e834";
    color: #1e86ff;
    margin: -3px;
  }

  &__title {
    font: 500 0.875em "Poppins";
    margin: 0 0 0 12px;
    color: #334680;
  }
}
</style>
