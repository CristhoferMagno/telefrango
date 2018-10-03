<template>
    <section id="institucional" class="my-3">
        <header class="institucional-header pt-5 w-100 text-center">
            <div class="institucional-header-background">
                <h1 class="institucional-header-title">
                    CONHEÇA <br> A GENTE
                </h1>
                <p class="institucional-header-p">
                    A empresa Telefrango foi fundada em 2007 sob o comando do Sr. Antonio Evanir, adquirio o antigo "Comergio Telefrango"e ampliou os seus servicos.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. periores tempore obcaecati ex deserunt, 
                    deleniti blanditiis possimus iste perferendis vero, officia, totam eum!<br><br>

                    A empresa Telefrango foi fundada em 2007 sob o comando do Sr. Antonio Evanir, adquirio o antigo "Comergio Telefrango"e ampliou os seus servicos.obcaecati ex deserunt, 
                    deleniti blanditiis possimus iste perferendis vero, officia, totam eum!<br><br>

                    A empresa Telefrango foi fundada em 2007 sob o comando do Sr. Antonio Evanir, adquirio o antigo "Comergio Telefrango"e ampliou os seus servicos.
                    Lorem ipsum dolor sit amet consectetur adipisicinis.
                </p>
                <span class="span-img">
                    <img src="static/imgs/woman-figure.png" alt="Woman figure">
                </span>
            </div>
        </header>
        <section class="institucional-values">
            <div class="container-institucional">
                <div class="row">
                    <div class="institucional-value col-lg-4">
                        <div class="card card-info">
                            <article class="text-center card-body p-4">
                                <figure class="institucional-value-figure my-2">
                                    <img src="static/imgs/info-point-arrow-img.png" alt="Missao">
                                </figure>

                                <div class="mb-3">
                                    <h2 class="warning-text-missao">
                                        Missão
                                    </h2>
                                </div>
                                
                                <p class="institucional-value-text text-left">
                                    Nossa missão e oferecer produtos e serviços de qualidade, 
                                    variedade e atendimento diferenciado,
                                    proporcionando bem-estar e conforto em um ambiente agradável
                                    de supermercado, fazendo o melhor para os nossos clientes,
                                    fornecedores e funcionários
                                </p>
                            </article>
                        </div>
                    </div>

                    <div class="institucional-value col-lg-4">
                        <div class="card card-info">
                            <article class="text-center card-body p-4">
                                <figure class="institucional-value-figure my-2">
                                    <img src="static/imgs/info-point-glass-img.png" alt="Visao">
                                </figure>

                                <div class="mb-3">
                                    <h2 class="warning-text-visao">
                                        Visão
                                    </h2>
                                </div>
                                <p class="institucional-value-text text-left">
                                    Nossa meta e ser referencia,
                                    atuando no comercio varejista e na 
                                    prestacao de servicos com uma loja 
                                    moderna e segura, priorizando a
                                    qualidade, variedade e a satisfacao
                                    no atendimento.
                                </p>
                            </article>
                        </div>
                    </div>
                
                    <div class="institucional-value col-lg-4">
                        <div class="card card-info">
                            <article class="text-center card-body p-4">
                                <figure class="institucional-value-figure my-2">
                                    <img src="static/imgs/info-point-check-img.png" alt="Valores">
                                </figure>

                                <div class="mb-3">
                                    <h2 class="warning-text-valores">
                                        Valores
                                    </h2>
                                </div>                                    
                                <p class="institucional-value-text text-left">
                                    Honestidade;<br>
                                    Respeito ao ser humano;<br>
                                    Solidariedade;<br>
                                    Trabalho em equipe;<br>
                                    Valorizacao do potencial interno;<br>
                                    Confianca;<br>
                                    Comprometimento e <br>
                                    responsabilidade com o trabalho.
                                </p>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<style scoped>
.container-institucional{
    margin: 0 auto;
    width: 850px;
}
.institucional-values{    
    margin-top: -190px;
    width: 100%;
}
.institucional-header-background{
    width: 800px;
    margin: 0 auto;
    background: #38649a;
    padding: 30px 50px;
    position: relative;
}
.institucional-header-background .span-img{
    position: absolute;
    bottom: -3px;
    left: -150px;
}
.institucional-header-background .span-img img{
    width: 300px;
}
.institucional-header-title{
    color: #f0de4e;
    font-size: 50px;
    text-transform: uppercase;
    font-family: 'Gotham Black';
    font-weight: 900;
    line-height: 1;
    margin-bottom: 20px;
}
.institucional-value-text{
    font-size: 14px;
    color: #444;
}
.institucional-header-p{
    width: 500px;
    color: #fff;
    margin: 0 auto;
    text-align: left;
    padding-bottom: 180px;
}
.institucional-value{
    padding: 0 8px;
}
.institucional-value-figure img{
    width: 90px;
}
.card-info {
    transition: .2s;
    width:100%;
    height:100%;
    border-radius:20px;
}
.warning-text-missao,
.warning-text-visao,
.warning-text-valores{
    font-family: 'Gotham Italic';
}
.warning-text-missao {
  color: #FF8800; 
}
.warning-text-visao {
  color: #AD13BB;
}
.warning-text-valores {
  color: #1961B9;
}
@media screen and (max-width: 768px) {
    .institucional-header{
        padding: 30px 0;
    }
    .container-institucional,
    .institucional-header-background{
        width: 80%;
    }

    .span-img{
        display: none;
    }
    .institucional-header-p{
        width: auto;
        padding-bottom: 0;
    }
    .institucional-values{
        margin-top: 40px;
    }
    .institucional-value{
        margin-bottom: 20px;
    }
  
}
@media screen and (max-width: 425px) {
    .institucional-header{
        padding: 20px !important;
    }
    .institucional-header-title{
        font-size: 35px;
    }
    .institucional-header-background{
        width: 100%;
    }
    .institucional-header-background{
        padding: 20px;
    }

}

       

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
    .container-institucional{
        margin: 0 auto;
        width: 300px;
    } 
    .institucional-header-background{
        width: 100%;
    }
} 

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .container-institucional{
        margin: 0 auto;
        width: 400px;
    } 
    .institucional-header-background{
        width: 100%;
    }
} 

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .container-institucional{
        margin: 0 auto;
        width: 500px;
    } 
    .institucional-header-background{
        width: 100%;
    }
} 

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .container-institucional{
        margin: 0 auto;
        width: 800px;
    } 
    .institucional-header-background{
        width: 800px;
    }
} 

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .container-institucional{
        margin: 0 auto;
        width: 800px;
    } 
    .institucional-header-background{
        width: 800px;
    }
}

</style>
