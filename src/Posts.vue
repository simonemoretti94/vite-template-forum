<script>
//import PostsHeader from './components/Posts/PostsHeader.vue';
import sharedHeader from './components/shared/sharedHeader.vue';
import PostsBody from './components/Posts/PostsBody.vue';
import PostsFooter from './components/Posts/PostsFooter.vue';

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
        //PostsHeader,
        sharedHeader,
        PostsBody,
        PostsFooter,
    }
}
</script>

<template>
    <sharedHeader :headerApp="this.headerApp" :headerPosts="this.headerPosts" :headerDetails="this.headerDetails">
    </sharedHeader>
    <!-- <PostsHeader></PostsHeader> -->
    <PostsBody></PostsBody>
    <PostsFooter></PostsFooter>
</template>