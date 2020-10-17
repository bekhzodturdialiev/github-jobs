<template>
  <div class="pagination">
    <template v-if="page !== 1">
      <router-link :to="{ name: 'Home', query: { page: page - 1 } }" rel="next">
        <div class="pagination__button">
          <i class="material-icons">chevron_left</i>
        </div>
      </router-link>
      <template v-if="page > 2">
        <router-link :to="{ name: 'Home', query: { page: 1 } }" rel="next">
          <div class="pagination__button">
            1
          </div>
        </router-link>
      </template>
      <router-link :to="{ name: 'Home', query: { page: page - 1 } }" rel="next">
        <div class="pagination__button">
          {{ page - 1 }}
        </div>
      </router-link>
    </template>

    <div class="pagination__button pagination__button-active">
      {{ page }}
    </div>

    <template v-if="hasNext">
      <router-link :to="{ name: 'Home', query: { page: page + 1 } }" rel="next">
        <div class="pagination__button">
          {{ page + 1 }}
        </div>
      </router-link>
      <router-link :to="{ name: 'Home', query: { page: page + 1 } }" rel="next">
        <div class="pagination__button">
          <i class="material-icons">chevron_right</i>
        </div>
      </router-link>
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Pagination",
  props: {
    page: {
      type: Number,
      required: true
    }
  },
  computed: {
    ...mapGetters({ hasNext: "job/hasNext" })
  }
};
</script>

<style lang="scss">
.pagination {
  display: flex;
  justify-content: flex-end;
  &__button {
    width: 36px;
    height: 36px;
    border: 1px solid #b7bcce;
    border-radius: 4px;
    color: #b7bcce;
    font-size: 0.75em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: 0 0 0 12px;

    &:hover {
      color: #1e86ff;
      border: 1px solid #1e86ff;
    }

    &-active {
      color: #fff;
      background: #1e86ff;
      &:hover {
        color: #fff;
        background: #1e86ff;
      }
    }
  }
}
</style>
