<script>
export default {
    name: 'headerNavbar',
    data() {
        return {
            app: null,
            details: null,
            posts: null,

            //nav variables
            iconBar: null,
            navigation: null,
            brand: null,
            isOpen: false,

            //screen width variables
            screenX: window.innerWidth,
            screenY: window.innerHeight,

            teststring: null,
        }
    },
    props: {

        headerApp: {
            type: Boolean,
            default: false,
        },
        headerDetails: {
            type: Boolean,
            default: false,
        },
        headerPosts: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        this.app = this.$props.headerApp;
        this.details = this.$props.headerDetails;
        this.posts = this.$props.headerPosts;
    },
    methods: {

        hideIconBar() {
            //getting elements
            this.iconBar = document.getElementById('iconBar');
            this.navigation = document.getElementById('navigation');


            //script
            this.iconBar.setAttribute('style', 'display:none;');
            this.navigation.classList.remove('hide');

            //setting isOpen for div.brand font-size purpose
            this.isOpen = true;

        },

        showIcon() {
            //getting elements
            this.iconBar = document.getElementById('iconBar');
            this.navigation = document.getElementById('navigation');


            //script
            this.iconBar.setAttribute('style', 'display: block');
            this.navigation.classList.add('hide');

            //setting isOpen for div.brand font-size purpose
            this.isOpen = false;
        },

        //div.brand servers
        updateScreenX() {
            this.screenX = window.innerWidth;
        },
    },
    created() {
        window.addEventListener('resize', this.updateScreenX);
    },
    computed: {
        brandResize() {
            if (this.screenX < 680 && this.screenX > 516 && this.isOpen) {
                return 'font-size: 30px';
            }
            else if (this.screenX < 516 && this.isOpen) {
                return 'font-size: 25px';
            }
            else if (this.screenX <= 320 && this.isOpen) {
                return 'font-size: 15px';
            }
        }
    },
}
</script>

<template>

    <!-- index navbar -->
    <div v-if="this.app" class="navbar">
        <nav id="navigation" class="navigation hide">
            <ul class="nav-list">
                <span id="closeIcon" class="close-icon" @click="showIcon()"><i class="fa fa-close"></i></span>
                <div id="wrapper" class="wrapper">
                    <li class="nav-item"><a href="#">Home</a></li>
                    <li class="nav-item"><a href="/posts.html">Posts</a></li>
                    <li class="nav-item"><a href="/details.html">Details</a></li>
                </div>
            </ul>
        </nav>
        <a id="iconBar" href="#" class="bars-icon" @click="hideIconBar()"><i class="fa fa-bars"></i></a>
        <div :style="brandResize" class="brand">Ereignis
        </div>
    </div>

    <!-- details navbar -->

    <div v-if="this.posts" class="navbar">
        <nav id="navigation" class="navigation hide">
            <ul class="nav-list">
                <span id="closeIcon" class="close-icon" @click="showIcon()"><i class="fa fa-close"></i></span>
                <div id="wrapper" class="wrapper">
                    <li class="nav-item"><a href="/index.html">Home</a></li>
                    <li class="nav-item"><a href="#">Posts</a></li>
                    <li class="nav-item"><a href="/details.html">Details</a></li>
                </div>
            </ul>
        </nav>
        <a id="iconBar" href="#" class="bars-icon" @click="hideIconBar()"><i class="fa fa-bars"></i></a>
        <div :style="brandResize" class="brand">Posts
        </div>
    </div>

    <!-- posts navbar -->
    <div v-if="this.details" class="navbar">
        <nav id="navigation" class="navigation hide">
            <ul class="nav-list">
                <span id="closeIcon" class="close-icon" @click="showIcon()"><i class="fa fa-close"></i></span>
                <div id="wrapper" class="wrapper">
                    <li class="nav-item"><a href="/index.html">Home</a></li>
                    <li class="nav-item"><a href="/posts.html">Posts</a></li>
                    <li class="nav-item"><a href="#">Details</a></li>
                </div>
            </ul>
        </nav>
        <a id="iconBar" href="#" class="bars-icon" @click="hideIconBar()"><i class="fa fa-bars"></i></a>
        <div :style="brandResize" class="brand">Details
        </div>
    </div>

</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;

    >.navigation {
        background-color: var(--violet);
        padding: 10px;
        width: 65%;
        border-radius: 5px;
        max-height: 80px;
        margin-right: 10px;

        >.nav-list {
            list-style-type: none;
            overflow: hidden;
            display: flex;
            align-items: start;

            >.close-icon {
                width: 10%;
                float: left;
                cursor: pointer;
                font-size: 40px;
                padding: 0 .2rem;
                border: solid .5px black;
                border-radius: 5px;

                background-color: rgb(0, 0, 0);
                box-shadow: 1.5px 2px 3px var(--violet);
            }

            >.close-icon:hover {
                background-color: white;
                color: black;
            }

            & div.wrapper {
                width: 90%;
                display: flex;
                justify-content: space-evenly;

                & .nav-item {
                    >a {
                        display: block;
                        text-align: center;
                        font-size: 20px;
                        padding: 10px;
                        color: #fff;
                    }

                    >a:hover {
                        background-color: rgba(0, 0, 0, 0.133);
                        border-radius: 5px;
                    }
                }
            }

        }

    }

    & div.brand {
        font-size: 40px;
        display: inline-block;
        font-family: "Orbitron", sans-serif;
    }
}

.bars-icon {
    font-size: 40px;
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    cursor: pointer;
}


@media screen and (max-width: 606px) and (min-width: 606px) {
    #close-icon {
        width: 15%;
    }

    #div.wrapper {
        width: 85%;
    }
}

@media screen and (max-width: 450px) {
    .navigation {
        max-height: auto;
    }


    .navbar {

        >.navigation {
            height: auto;

            >.nav-list {
                >.close-icon {
                    width: 20%;
                    float: right;
                    text-align: center;
                    font-size: 30px;
                }

                & div.wrapper {
                    width: 80%;
                    flex-wrap: wrap;

                    & .nav-item {
                        >a {
                            font-size: 15px;
                            padding: 5px;
                            margin: auto .5rem;
                        }
                    }
                }

            }
        }
    }

}

@media screen and (max-width: 372px) {

    .navbar {
        >#navigation {
            min-height: 100px;

            >ul.nav-list {
                & div#wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
            }
        }
    }
}
</style>