<script>
import sharedHeader from "./components/shared/sharedHeader.vue";
import DetailsBody from './components/Details/DetailsBody.vue';
import sharedFooter from "./components/shared/sharedFooter.vue";

export default {
    name: 'Details',
    data() {
        return {
            headerApp: false,
            headerPosts: false,
            headerDetails: true,
        }
    },
    components: {
        sharedHeader,
        DetailsBody,
        sharedFooter,
    }
}
</script>

<template>
    <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
    </sharedHeader>
    <DetailsBody></DetailsBody>
    <sharedFooter></sharedFooter>
</template>