<script>
import headerNavbar from './headerNavbar.vue';

export default {
    name: 'sharedHeader',
    data() {
        return {

        }
    },
    components: {
        headerNavbar,
    },
    props: {
        headerApp: Boolean,
        headerDetails: Boolean,
        headerPosts: Boolean,
    },
}
</script>

<template>
    <header>

        <headerNavbar :headerApp="headerApp" :headerPosts="headerPosts" :headerDetails="headerDetails"></headerNavbar>

        <!-- search box -->

        <div class="search-box">
            <div>
                <select name="" id="search-box-select">
                    <option value="all">All</option>
                    <option value="title">Title</option>
                    <option value="description">Description</option>
                </select>
                <input type="text" id="search-box-input" placeholder="write here..." name="search-box-input">
                <button id="button-search"><i class="fa fa-search"></i></button>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Navbar */
header {
    margin-inline: 10px;
}

/* search box */

.search-box {
    border: solid 1 px var(--violet);
    margin-top: 1.5rem;
    padding: 40px;
    display: flex;
    flex: wrap;
    justify-content: center;
    box-shadow: 1px 2px 3px var(--violet);
}

.search-box select,
input,
button#button-search {
    padding: 6px;
    background-color: #fff;
    color: #000;
    margin: auto .1rem;
}

.search-box button:hover {
    background-color: #000;
    color: #fff;
    box-shadow: 1px 2px 3px #fff;
    ;
}


/* navbar for smartphones viewport */
@media screen and (max-width: 450px) {

    header {
        margin-inline: 10px;
    }
}

@media screen and (max-width: 372px) {

    .search-box select,
    input,
    button#button-search {
        min-width: 300px;
        margin-top: .5rem;
    }

    button#button-search {
        border: 0;
    }

}
</style>