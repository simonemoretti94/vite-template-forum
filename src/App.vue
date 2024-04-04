<script>
//import AppHeader from "./components/App/AppHeader.vue";
import sharedHeader from "./components/shared/sharedHeader.vue";
import AppBody from "./components/App/AppBody.vue";
import AppFooter from "./components/App/AppFooter.vue";

export default {
  name: 'App',
  data() {
    return {
      headerApp: true,
      headerPosts: false,
      headerDetails: false,
    }
  },
  components: {
    // AppHeader,
    sharedHeader,
    AppBody,
    AppFooter,
  },
};
</script>

<template>
  <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
  </sharedHeader>
  <!-- <AppHeader></AppHeader> -->
  <AppBody></AppBody>
  <AppFooter></AppFooter>
</template>

<style scoped></style>