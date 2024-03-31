<script>
export default {
    name: 'AppBody',
}
</script>

<template>
    <main>
        <section id="section-1">
            <div class="container">
                <div class="subforum">
                    <div class="subforum-title">
                        <h1>General informations</h1>
                    </div>
                    <div class="subforum-row">
                        <div class="subforum-icon subforum-column center">
                            <i class="fa fa-car"></i>

                        </div>
                        <div class="subforum-description subforum-column center flex-column">
                            <h1><a href="#">Description title:</a></h1>
                            <p>Description content: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Reprehenderit,
                                similique.</p>
                        </div>
                        <div class="subforum-stats subforum-column center">
                            <span>24 Posts/<br> 15 Topics</span>
                        </div>
                        <div class="subforum-info subforum-column center">
                            <p>
                                <b><a href="#">Last Post</a></b> by <b><a href="#">RandomGuyFakwes</a></b> <br>on
                                <small>30 Mar 2024</small>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
.subforum {
    margin-top: 20px
}

.subforum-title {
    background-color: #292b2e;
    padding: 5px;
    border-radius: 5px;
    margin: 4px;
}

.subforum-row {
    display: grid;
    grid-template-columns: 7% 60% 13% 20%;

    & h1 {
        width: 100%;
        text-align: left;
    }

    & .subforum-info {
        >p {
            flex-wrap: wrap;
        }
    }
}

.subforum-column {
    padding: 10px;
    margin: 4px;
    border-radius: 5px;
    background-color: #111314;
}

.subforum-icon {
    font-size: 22px;
}

/* Smartphones Viewport */
@media screen and (max-width: 460px) {

    .container {
        margin: 10px;
        padding: 10px;
    }

    .subforum-row {
        display: grid;
        grid-template-columns: 25% 75%;
        grid-template-rows: 65% 35%;
    }

    .subforum-icon {
        font-size: 40px
    }
}

@media screen and (min-width: 460px) and (max-width: 1024px) {
    .container {
        margin: 15PX;
        padding: 15px;
    }

    .subforum-row {
        display: grid;
        grid-template-columns: 10% 60% 10% 20%;

    }
}
</style>