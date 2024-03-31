<script>
export default {
    name: 'PostsBody',
}
</script>

<template>
    <main>
        <div class="container">
            <div class="posts-table">

                <div class="navigate">
                    <span><a href="#">My Forum - Forums</a> >> <a href="#">Random Topic</a></span>
                </div>

                <div class="table-head">
                    <div class="status">Status</div>
                    <div class="subjects">Subjects</div>
                    <div class="replies">Replies / Views</div>
                    <div class="last-reply">Last Reply</div>
                </div>
                <div class="table-row">
                    <div class="status"><i class="fa fa-fire"></i></div>
                    <div class="subjects"><a href="#">Is learning HTML5 worth it in 2024?</a><br><span>Started by <b><a
                                    href="#">Simone</a></b>.</span></div>
                    <div class="replies">
                        2 replies <br> 125 views
                    </div>
                    <div class="last-reply">
                        March 2024 <br> By <b><a href="#">Simone</a></b>
                    </div>
                </div>

                <div class="table-row">
                    <div class="status"><i class="fa fa-cat"></i></div>
                    <div class="subjects"><a href="#">Is learning CSS worth it in 2024?</a><br><span>Started by <b><a
                                    href="#">Luca</a></b>.</span></div>
                    <div class="replies">
                        2 replies <br> 125 views
                    </div>
                    <div class="last-reply">
                        March 2024 <br> By <b><a href="#">Luca</a></b>
                    </div>
                </div>

                <div class="table-row">
                    <div class="status"><i class="fa fa-rocket"></i></div>
                    <div class="subjects"><a href="#">Is learning JAVASCRIPT worth it in 2024?</a><br><span>Started by
                            <b><a href="#">Fabio</a></b>.</span></div>
                    <div class="replies">
                        2 replies <br> 125 views
                    </div>
                    <div class="last-reply">
                        March 2024 <br> By <b><a href="#">Fabio</a></b>
                    </div>
                </div>

                <div class="table-row">
                    <div class="status"><i class="fa fa-book"></i></div>
                    <div class="subjects"><a href="#">Is learning PHP worth it in 2024?</a><br><span>Started by <b><a
                                    href="#">Sara</a></b>.</span></div>
                    <div class="replies">
                        2 replies <br> 125 views
                    </div>
                    <div class="last-reply">
                        March 2024 <br> By <b><a href="#">Sara</a></b>
                    </div>
                </div>

                <div class="table-row">
                    <div class="status"><i class="fa fa-dragon"></i></div>
                    <div class="subjects"><a href="#">Is learning SQL worth it in 2024?</a><br><span>Started by <b><a
                                    href="#">Android</a></b>.</span></div>
                    <div class="replies">
                        2 replies <br> 125 views
                    </div>
                    <div class="last-reply">
                        March 2024 <br> By <b><a href="#">Android</a></b>
                    </div>
                </div>
            </div>

            <!-- pagination -->
            <div class="pagination">
                Pages: <a href="#">1</a><a href="#">2</a><a href="#">3</a>
            </div>
        </div>

        <!-- status note -->

        <div class="note">
            <span>
                <i class="fa fa-frown"></i>&nbsp; 0 Engagement Topic
            </span><br>
            <span>
                <i class="fa fa-book"></i>&nbsp; Low Engagement Topic
            </span><br>
            <span>
                <i class="fa fa-fire"></i>&nbsp; Popular Topic
            </span><br>
            <span>
                <i class="fa fa-lock"></i>&nbsp;Closed Engagement Topic
            </span><br>
        </div>

    </main>
</template>

<style scoped>
main {

    /* table head */

    .posts-table {
        >.table-head {
            display: flex;

            & div {
                padding: 5px;
                margin: 2px;
                background-color: #2C2C2C;
                font-weight: bold;
            }

            & .status {
                flex: 7%;
            }

            & .subjects {
                flex: 68%;
            }

            & .replies {
                flex: 10%;
            }

            & .last-reply {
                flex: 15%;
            }
        }
    }

    /* table body */

    .table-row {
        display: flex;

        & .status,
        subjects,
        replies,
        last-reply {
            padding: 5px;
            margin: 2px;
            background-color: #131413;
        }

        & .status {
            flex: 7%;
            font-size: 30px;
            text-align: center;
        }

        & .subjects {
            flex: 68%;

        }

        & .replies {
            flex: 10%;
        }

        & .last-reply {
            flex: 15%;
        }
    }


}

/* pagination */

.pagination {
    padding: 20px;
    font-size: 15px;

    & a {
        color: #fff;
        margin-inline: 5px;
        padding: 5px 10px;
        border: solid .5px #fff;
    }

    & a:hover {
        opacity: .5;
    }
}

/* navigation */

.navigate {
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

/* status note */

.note {
    background-color: #111314;
    padding: 20px;
    display: block;

    & span {
        font-size: 20px;
        margin-block: .7rem;
    }
}
</style>