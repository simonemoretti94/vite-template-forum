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
                        <div class="subforum-icon subforum-column">
                            <i class="fa fa-car"></i>

                        </div>
                        <div class="subforum-description subforum-column">
                            <h1><a href="#">Description title:</a></h1>
                            <p>Description content: Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                                Reprehenderit,
                                similique.</p>
                        </div>
                        <div class="subforum-stats subforum-column">
                            <span>24 Posts | 15 Topics</span>
                        </div>
                        <div class="subforum-info subforum-column">
                            <b><a href="#">Last Post</a></b> by <b><a href="#">RandomGuyFakwes</a></b> on
                            <small>30 Mar 2024</small>

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
}

.subforum-column {
    padding: 10px;
    margin: 4px;
    border-radius: 5px;
    background-color: #111314;
}
</style>