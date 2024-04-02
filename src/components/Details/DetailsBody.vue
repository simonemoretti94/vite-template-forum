<script>
export default {
    name: 'DetailsBody',
}
</script>

<template>
    <div class="container">
        <div class="posts-table">
            <div class="navigate">
                <span><a href="#">My Forum - Forums</a> >> <a href="#">Random Forum</a></span> >> <span><a
                        href="#">Random Post</a></span>
            </div>
        </div>
    </div>

    <div class="topic-container">
        <div class="head">
            <div class="author">Author</div>
            <div class="content">Topic: post's title (Read 1258 Times)</div>
        </div>

        <div class="body">
            <div class="authors"></div>
        </div>
    </div>
</template>

<style scoped>
/* navigation */
.container {
    & .navigate {
        margin-block: 20px;
        font-weight: lighter;
        font-size: 24px;

        & a {
            color: #fff;
        }

        & a:hover {
            color: #ff0042;
            font-weight: bolder;
        }
    }


    & .head {
        display: flex;
        background-color: #2c2c2c;
        padding: 5px;
        font-weight: bold;
        font-size: 15px;

        & .authors {
            flex: 20%;
        }

        & .content {
            flex: 80%;
        }
    }

}
</style>