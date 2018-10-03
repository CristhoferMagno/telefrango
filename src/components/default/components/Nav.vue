<template>
    <nav class="navbar my-auto navbar-expand-sm navbar-blue-e1 navbar-light fixed-top shadow-sm py-0">
        <div class="container">
            <button class="navbar-toggler text-muted btn-primary-outline" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false">
                <span class="navbar-toggler-icon "></span>
            </button>
            <a class="navbar-brand py-0" href="/">
                <figure>
                    <img src="static/imgs/logo-telefrango.png" alt="Telefrango Melhor Mercado" width="150">
                </figure>
            </a>
            <div class="collapse navbar-collapse" id="nav-menu">
                <ul class="navbar-nav">
                    
                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="/">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="#institucional">Institucional</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="#encards">Loja</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="#encards">Ofertas</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="#midias">Midias</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link nav-anchor" href="#contatos">Contatos</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
$(document).ready(function(){
    $(".nav-anchor").click(function(){
        $('html, body').animate({
           scrollTop: $($.attr(this, 'href') ).offset().top - 70
        }, 500);
    })
})
</script>

<style scoped>
.container{
    width: 900px;
}
.navbar-blue-e1{
    background: #ffffff;
}
.navbar-light .navbar-nav .nav-link{
    color: #0056b3;
}
.nav-item{
    margin-right: 15px;
    padding: 20px 0;
    transition: .3s;
}
.nav-item:hover{
    background: #e2e2e2;
}
@media screen and ( max-width: 573px ) {
    .container {
        padding: 20px 0;
    }
    .navbar-light .navbar-brand figure{
        margin: 0;

    }
}
@media screen and ( max-width: 425px ) {
    .navbar-fixed-top {
        right: auto;
    }
    .btn-primary-outline {
        background-color: transparent;
        border-color: #ccc;
    }
    .custom-toggler.navbar-toggler {
        border-color: rgb(255,102,203);
    }
    .nav-item{
        padding: 10px 0;
    }
    .nav-item:hover{
        background: none;
    }
}
</style>
