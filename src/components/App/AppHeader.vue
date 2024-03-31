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
                    <span id="closeIcon" class="close-icon" @click="showIcon()"><i class="fa fa-close"></i></span>
                    <div id="wrapper" class="wrapper">
                        <li class="nav-item"><a href="#">Home</a></li>
                        <li class="nav-item"><a href="#">Forum</a></li>
                        <li class="nav-item"><a href="#">Details</a></li>
                    </div>
                </ul>
            </nav>
            <a id="iconBar" href="#" class="bars-icon" @click="hideIconBar()"><i class="fa fa-bars"></i></a>
            <div :style="brandResize" class="brand">Ereignis
            </div>
        </div>

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
                    box-shadow: 1.5px 2px 3px rgba(165, 32, 165, 0.593);
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
}

.bars-icon {
    font-size: 40px;
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    cursor: pointer;
}

/* search box */

.search-box {
    border: solid 1 px #52057b;
    margin-top: 1.5rem;
    padding: 40px;
    display: flex;
    flex: wrap;
    justify-content: center;
    box-shadow: 1px 2px 3px #52057b;
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

@media screen and (max-width: 606px) and (min-width: 606px) {
    #close-icon {
        width: 15%;
    }

    #div.wrapper {
        width: 85%;
    }
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
}

@media screen and (max-width: 372px) {

    #navigation {
        min-height: 100px;
    }


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