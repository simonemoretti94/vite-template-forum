<script>
import DetailsHeader from './components/Details/DetailsHeader.vue';
import DetailsBody from './components/Details/DetailsBody.vue';
import DetailsFooter from './components/Details/DetailsFooter.vue';

export default {
    name: 'Details',
    data() {
        return {

        }
    },
    components: {
        DetailsHeader,
        DetailsBody,
        DetailsFooter,
    }
}
</script>

<template>
    <DetailsHeader></DetailsHeader>
    <DetailsBody></DetailsBody>
    <DetailsFooter></DetailsFooter>
</template>