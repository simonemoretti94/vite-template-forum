<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="navbar">
            <nav class="navigation">
                <ul class="nav-list">
                    <li class="nav-item"><a href="#">Home</a></li>
                    <li class="nav-item"><a href="#">Forum</a></li>
                    <li class="nav-item"><a href="#">Details</a></li>
                </ul>
            </nav>
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
            display: inline-block;
            border-radius: 5px;
            max-height: 80px;
            margin-right: 10px;

            >.nav-list {
                list-style-type: none;
                overflow: hidden;
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
}
</style>