<template>
    <header class="header d-flex">
        <div id="slide-header" class="carousel slide carousel-fade w-100" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#slide-header" data-slide-to="0" class="active"></li>           
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <figure>
                        <img src="static/imgs/header-slide.png" alt="First slide" class="img">
                        <img src="static/imgs/header-slide-title.png" alt="title" class="img-title">
                    </figure>
                </div>
            </div>
            <a class="carousel-control-prev" href="#slide-header" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slide-header" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </header>
</template>

<style scoped>
.header{
    width: 100%;
    height: 800px;
    overflow: hidden;
}
.carousel-item .img{
    height: 1000px;
    margin-top: -100px;
}
.carousel-item .img + .img-title{
    position: relative;
    top: -750px;
    display: block;
    margin: 0 auto;
    width: 650px;
}
.carousel-indicators li{
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: none;
    border: solid 2px #fff;
}
.carousel-indicators li.active{
    background-color: #fff;
}
.carousel-indicators{
    bottom: 180px;
}
@media screen and (max-width: 768px) {
    .header{
        height: 100vh;
    }
    .carousel-item .img + .img-title {
        top: -700px;
        width: 480px;
    }
    .carousel-indicators{
        bottom: 0;
    }
}
@media screen and (max-width: 425px) {
    .carousel-item .img + .img-title {
        width: 300px;
        top: -690px;
    }
}
</style>