<script>
import sharedHeader from "./components/shared/sharedHeader.vue";
import AppBody from "./components/App/AppBody.vue";
import sharedFooter from "./components/shared/sharedFooter.vue";

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
    sharedHeader,
    AppBody,
    //AppFooter,
    sharedFooter,
  },
};
</script>

<template>
  <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
  </sharedHeader>
  <AppBody></AppBody>
  <sharedFooter></sharedFooter>
</template>

<style scoped></style>