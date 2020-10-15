<template>
  <article class="global-search">
    <form class="global-search-form" action="">
      <label>
        icon
        <input
          class="global-search-form__text"
          type="text"
          placeholder="Title, companies, expertise or benefits"
        />
      </label>
      <button class="global-search-form__button">Search</button>
    </form>
  </article>
</template>

<script>
export default {
  name: "GlobalSearch",
};
</script>

<style lang="scss" scoped>
.global-search {
  background: transparent url("../assets/images/backgroundImg.png") center
    no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;

  &-form {
    background: #fff;
    padding: 5px;
    margin: 50px 0;
    border-radius: 5px;

    &__text {
      width: 400px;
      border: none;
    }

    &__button {
      border: none;
      padding: 10px 30px;
      border-radius: 5px;
    }
  }
}
</style>
