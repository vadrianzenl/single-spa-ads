<template>
    <div class="container">
        <h2>Listado de Comercios</h2>
        <hr />
        <div class="row">
            <home-item
                    v-for="commerce in commerces"
                    :key="commerce.id"
                    :commerce="commerce"
                    @goRewards="goRewards"
            >
            </home-item>
        </div>
    </div>
</template>
<script>
  import * as commerceApi from "api/commerceApi.js";
  import HomeItem from "../homeItem/index.vue";

  export default {
    name: 'HomePage',
    components: {
      HomeItem
    },
    data() {
      return {
        commerces: []
      }
    },
    methods: {
      goRewards(commerceId) {
        this.$emit('goRewards', commerceId);
      }
    },
    mounted () {
      commerceApi.getCommerces().then(commmercesList => {
        this.commerces = commmercesList;
      });
    }
  }
</script>
<style type="text/css">
    .container {
        margin-top: 80px;
    }
</style>