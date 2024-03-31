<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="navbar">
            <nav class="navigation hide">
                <ul class="nav-list">
                    <span class="close-icon"><i class="fa fa-close"></i></span>
                    <li class="nav-item"><a href="#">Home</a></li>
                    <li class="nav-item"><a href="#">Forum</a></li>
                    <li class="nav-item"><a href="#">Details</a></li>
                </ul>
            </nav>
            <a href="#" class="bars-icon"><i class="fa fa-bars"></i></a>
            <div class="brand">My Forum</div>
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
                justify-content: space-evenly;

                >.close-icon {
                    font-size: 40px;
                    float: left;
                    cursor: pointer;
                }

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
}

.bars-icon {
    font-size: 40px;
    display: inline-block;
    margin-right: 10px;
    color: #fff;
    cursor: pointer;
}
</style>