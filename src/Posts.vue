<script>
import sharedHeader from './components/shared/sharedHeader.vue';
import PostsBody from './components/Posts/PostsBody.vue';
import sharedFooter from './components/shared/sharedFooter.vue';

export default {
    name: 'Posts',
    data() {
        return {
            headerApp: false,
            headerPosts: true,
            headerDetails: false,
        }
    },
    components: {
        sharedHeader,
        PostsBody,
        sharedFooter,
    }
}
</script>

<template>
    <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
    </sharedHeader>
    <PostsBody></PostsBody>
    <sharedFooter></sharedFooter>
</template>