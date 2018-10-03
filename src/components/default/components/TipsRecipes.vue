<template>
    <section id="midias" class="mt-4">
        <div class="midias-header pt-4 pb-5">
            <header class="text-center mb-2">
                <h1 class="midias-title">Dicas <br> e receitas</h1>
            </header>
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="midia col-md-6 col-lg-6">
                        <a href="/receitas">
                            <figure class="migia-figure mb-4">
                                <img src="static/imgs/receitas-do-dia.png" alt="Missao">
                            </figure>
                        </a>
                    </div>
                    <div class="midia col-md-6 col-lg-6">
                        <a href="/dicas">
                            <figure class="migia-figure mb-4">
                                <img src="static/imgs/dicas-tele.png" alt="Missao">
                            </figure>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
#midias{
    background: #f2e368;
}
.midias-title{
    color: #6939c3;
    font-size: 60px;
    text-transform: uppercase;
    font-family: 'Gotham Black';
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
}
.migia-figure img{
    width: 100%;
}
.midias-header{
    position: relative;
    width: 850px;
    margin: 0 auto;
}
.midias-header::before{
    content: '';
    width: 22%;
    height: 2px;
    background: #6939c3;
    display: block;
    position: absolute;
    top: 70px;
    left: 15px;
}
.midias-header::after{
    content: '';
    width: 22%;
    height: 2px;
    background: #6939c3;
    display: block;
    float: right;
    position: absolute;
    top: 70px;
    right: 15px;
}
@media screen and (max-width: 860px) { 
    .midias-header{
        width: 100%;
    }
    .midias-header::before,
    .midias-header::after{
        display: none;
    }
} 
@media screen and (max-width: 425px) { 
    .midias-title{
        font-size: 35px;
    }
    .migia-figure img{
        width: 80%;
    }
} 
</style>