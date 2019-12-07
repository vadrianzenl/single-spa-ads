<template>
    <div class="col-4">
        <div class="card" style="width: 18rem; height: 21rem;">
            <img class="card-img-top" :src="commerce.logo" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title">{{ commerce.name }}</h5>
                <p class="card-text">{{ commerce.category.name }}</p>
                <button type="button" class="btn btn-primary" v-on:click="goRewards">Ver Beneficios</button>
            </div>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'HomeItem',
    props: {
      commerce: {
        type: Object
      }
    },
    methods: {
      goRewards() {
        this.$emit('goRewards', this.commerce.id);
      }
    }
  }
</script>
<style type="text/css">
</style>