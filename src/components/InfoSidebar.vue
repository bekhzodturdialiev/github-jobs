<template>
  <aside class="info-sidebar">
    <p
      @click="hasHistory() ? $router.go(-1) : $router.push('/')"
      class="go-back"
    >
      <i class="material-icons">arrow_left</i>
      Back to search
    </p>
    <h3 class="how-to-apply">how to apply</h3>
    <p class="how-to-apply-info">
      <span v-html="how"></span>
    </p>
  </aside>
</template>

<script>
export default {
  name: "InforSidebar",
  props: {
    how: {
      type: String,
      default: "Please, wait a moment..."
    }
  },
  methods: {
    hasHistory() {
      return window.history.length > 2;
    }
  }
};
</script>

<style lang="scss">
.info-sidebar {
}
.go-back {
  font: 500 0.875em "Poppins";
  cursor: pointer;
  color: #1e86ff;
  display: flex;
  align-items: center;
  margin: 0;
}
.how-to-apply {
  font: 700 0.875em "Poppins";
  color: #b9bdcf;
  margin: 36px 0 16px;
  text-transform: uppercase;
}
.how-to-apply-info {
  font: 700 0.875em "Poppins";
  color: #334680;
  width: 231px;
  word-break: break-all;
}
</style>
