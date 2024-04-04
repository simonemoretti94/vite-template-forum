<script>
//import DetailsHeader from './components/Details/DetailsHeader.vue';
import sharedHeader from "./components/shared/sharedHeader.vue";
import DetailsBody from './components/Details/DetailsBody.vue';
import DetailsFooter from './components/Details/DetailsFooter.vue';

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
        //DetailsHeader,
        sharedHeader,
        DetailsBody,
        DetailsFooter,
    }
}
</script>

<template>
    <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
    </sharedHeader>
    <!-- <DetailsHeader></DetailsHeader> -->
    <DetailsBody></DetailsBody>
    <DetailsFooter></DetailsFooter>
</template>