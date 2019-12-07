<template>
    <div>
        <home-page v-show="showHomePage" @goRewards="goRewards"/>
        <home-rewards v-show="showHomeRewards" :commerce-id="commerceId" @goBack="goBack"/>
    </div>
</template>
<script>
import HomePage from './components/homePage/index.vue';
import HomeRewards from './components/homeRewards/index.vue';
export default {
  name: 'Home',
  components: {
    HomePage,
    HomeRewards
  },
  data() {
    return {
      showHomePage: true,
      showHomeRewards: false,
      commerceId: 0
    }
  },
  methods: {
    goRewards(commerceId) {
      this.showHomePage = false
      this.showHomeRewards = true
      this.commerceId = commerceId
    },
    goBack() {
      this.showHomePage = true
      this.showHomeRewards = false
      this.commerceId = 0
    }
  }
}
</script>