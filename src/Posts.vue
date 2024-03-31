<script>
import PostsHeader from './components/Posts/PostsHeader.vue';
import PostsBody from './components/Posts/PostsBody.vue';
import PostsFooter from './components/Posts/PostsFooter.vue';

export default {
    name: 'Posts',
    data() {
        return {

        }
    },
    components: {
        PostsHeader,
        PostsBody,
        PostsFooter,
    }
}
</script>

<template>
    <PostsHeader></PostsHeader>
    <PostsBody></PostsBody>
    <PostsFooter></PostsFooter>
</template>