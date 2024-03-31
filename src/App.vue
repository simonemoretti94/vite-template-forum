<script>
import AppHeader from "./components/App/AppHeader.vue";
import AppBody from "./components/App/AppBody.vue";
import AppFooter from "./components/App/AppFooter.vue";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppBody,
    AppFooter,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppBody></AppBody>
  <AppFooter></AppFooter>
</template>

<style scoped></style>