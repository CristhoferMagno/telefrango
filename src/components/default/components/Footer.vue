<template>
    <footer class="py-4">
        <div class="container">
            <div class="w-100">
                <div class="row d-flex justify-content-center">
                    <div class="col-lg-12 d-flex justify-content-center">
                        <nav class="navbar navbar-expand-sm navbar-blue-e1 navbar-light">
                            <div class="container">
                                <button class="navbar-toggler text-muted btn-primary-outline" type="button" data-toggle="collapse" data-target="#nav-menu" aria-controls="nav-menu" aria-expanded="false">
                                    <span class="navbar-toggler-icon "></span>
                                </button>
                                <a class="navbar-brand" href="#">
                                    <figure class="footer-logo">
                                        <img src="static/imgs/logo-telefrango.png" alt="Telefrango Melhor Mercado" width="150">
                                    </figure>
                                </a>
                                <div class="collapse navbar-collapse" id="nav-menu">
                                    <ul class="navbar-nav">
                                        
                                        <li class="nav-item">
                                            <a class="nav-link nav-anchor" href="#">Home</a>
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
                                            <a class="nav-link" href="#midias">Midias</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link" href="#contatos">Contatos</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="col-mobile d-flex justify-content-center">
                        <div class="col-mobile-12 align-self-center">
                            <h6 class="span-cartoes">Aceitamos<br> os cartões:</h6>
                        </div>
                        <div class="col-mobile-12">
                            <span>
                                <img src="static/imgs/span-cartao-1.png" alt="cartãos telefrango">
                            </span>
                        </div>
                        <div class="col-mobile-12">
                            <span>
                                <img src="static/imgs/span-cartao-2.png" alt="cartãos telefrango">
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
figure{
    margin:  0;
}
.footer-logo img{
    width: 200px;
}
.navbar-light .navbar-nav .nav-link{
    color: #0056b3;
}
.span-cartoes{
    font-family: 'Gotham Black';
    margin-right: 8px;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 12px;
    text-align: center;
}
@media screen and (max-width: 875px) {
    .navbar{
        display: none;
    }
}
@media screen and (max-width: 653px) {
    
    .col-mobile{
        display: block !important;
    }
    .col-mobile-12{
        width: 100%;
    }
}
@media screen and (max-width: 425px) {
    .span-cartoes{
        text-align: left;
        font-size: 16px;
    }
}
</style>
