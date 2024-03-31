<script>
export default {
    name: 'AppHeader',
    data() {
        return {
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
    <header>
        <div class="navbar">
            <nav id="navigation" class="navigation hide">
                <ul class="nav-list">
                    <span class="close-icon" @click="showIcon()"><i class="fa fa-close"></i></span>
                    <div class="wrapper">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#">Forum</a></li>
                        <li class="nav-item"><a href="#">Details</a></li>
                    </div>
                </ul>
            </nav>
            <a id="iconBar" href="#" class="bars-icon" @click="hideIconBar()"><i class="fa fa-bars"></i></a>
            <div :style="brandResize" class="brand">My Forum
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Navbar */
header {
    margin-inline: 10px;

    >.navbar {
        display: flex;
        align-items: center;

        >.navigation {
            background-color: #52057b;
            padding: 10px;
            width: 65%;
            border-radius: 5px;
            max-height: 80px;
            margin-right: 10px;

            >.nav-list {
                list-style-type: none;
                overflow: hidden;
                display: flex;

                >.close-icon {
                    width: 20%;
                    font-size: 40px;
                    float: left;
                    cursor: pointer;
                }

                & div.wrapper {
                    width: 80%;
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
}

.bars-icon {
    font-size: 40px;
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    cursor: pointer;
}

/* navbar for smartphones viewport */
@media screen and (max-width: 450px) {
    .navigation {
        max-height: auto;
    }

    header {
        margin-inline: 10px;

        >.navbar {

            >.navigation {
                height: auto;

                >.nav-list {
                    >.close-icon {
                        font-size: 30px;
                    }

                    & div.wrapper {
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
}

@media screen and (max-width: 372px) {

    #navigation {
        min-height: 100px;
    }

}
</style>