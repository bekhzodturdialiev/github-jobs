<template>
  <label class="search-criteria">
    <input
      :type="type"
      :name="name"
      :value="checkvalue"
      class="search-criteria__checkbox"
      @change="checked($event)"
    />
    <span class="search-criteria__icon"></span>
    <span class="search-criteria__title"><slot></slot></span>
  </label>
</template>

<script>
import store from "../store";

export default {
  name: "CheckBox",
  data() {
    return {
      isFullOnly: false
    };
  },
  props: {
    checkvalue: {
      type: String,
      default: ""
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "radio"
    }
  },
  methods: {
    checked(event) {
      const obj = {};
      if (event.target.name === "type") {
        console.log(event.target.value);
        this.isFullOnly = !this.isFullOnly;
      } else {
        obj[this.name] = event.target.value;
      }
      obj.page = 1;
      obj.full_time = this.isFullOnly;
      obj.reload = true;
      obj.checkNext = false;
      console.log(obj);
      store.dispatch("job/fetchJobs", {
        params: obj
      });
    }
  }
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
