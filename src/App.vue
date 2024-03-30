<script>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";

export default {
  name: 'App',
  data() {
    return {

    }
  },
  components: {
    AppHeader,
    AppBody,
  },
};
</script>

<template>
  <AppHeader></AppHeader>
  <AppBody></AppBody>
</template>

<style scoped></style>