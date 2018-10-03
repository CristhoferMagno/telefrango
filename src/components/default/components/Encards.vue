<template> 
    <section id="encards" class="pt-5"> 
        <div class="container-encards">
            <div class="row text-center">
                <div class="col-lg-12 encards-title"> 
                    <h2 class="mb-4"> ENCARTES <br/>DE OFERTAS</h2> 
                </div> 
                <div class="encard col-md-4 col-lg-4">
                    <a href="#" data-toggle="modal" data-target="#modalFimSemana">
                        <div class="mb-2">
                            <h2 class="encard-title">
                                Final de Semana
                            </h2>
                        </div>
                        <figure class="encard-figure">
                            <img src="static/imgs/TelefrangoFinalDeSemana.jpg" alt="TelefrangoFinalDeSemana">
                        </figure>
                    </a>
                </div>
                <div class="encard col-md-4 col-lg-4">
                    <a href="#" data-toggle="modal" data-target="#modalMensal">
                        <div class="mb-2">
                            <h2 class="encard-title">
                                Mensal
                            </h2>
                        </div>
                        <figure class="encard-figure">
                            <img src="static/imgs/TelefrangoMensal.jpg" alt="TelefrangoMensal">
                        </figure>
                    </a>
                </div>
                <div class="encard col-md-4 col-lg-4">
                    <a href="#" data-toggle="modal" data-target="#modalQuinzenal">
                        <div class="mb-2">
                            <h2 class="encard-title">
                                Quinzenal
                            </h2>
                        </div>
                        <figure class="encard-figure">
                            <img src="static/imgs/TelefrangoQuinzenal.jpg" alt="TelefrangoQuinzenal">
                        </figure>
                    </a>
                </div>
            </div>
        </div>

        <div v-for="encard in encards" :key="encard.id" class="modal fade" :id="encard.id" tabindex="-1" role="dialog" :aria-labelledby="encard.id" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <iframe style="width:525px; height:368px;" :src="encard.link" frameborder="0" allowfullscreen></iframe>                    
                </div>
            </div>
        </div>
    </section> 
</template> 

<script>
export default {
    created(){
        /*this.$resource('teste.php')
            .get()
            .then(response => console.log(response));*/
        
    },
    data(){
        return {
            encards: [
                {
                    title: 'Fim de Semana',
                    link: '//e.issuu.com/embed.html#27536564/64150731',
                    id: 'modalFimSemana'
                },
                {
                    title: 'Mensal',
                    link: '//e.issuu.com/embed.html#27536564/64143859',
                    id: 'modalMensal'
                },
                {
                    title: 'Quinzenal',
                    link: '//e.issuu.com/embed.html#27536564/64188431',
                    id: 'modalQuinzenal'
                }
            ]
            
        }
    }
}
</script>


<style scoped> 

.container-encards{
    margin: 0 auto;
    width: 820px;
}
.encards-title {     
    text-transform: uppercase;
    font-family: 'Gotham Black';
} 
.encards-title::before{
    content: '';
    width: 22%;
    height: 2px;
    background: #6d6058;
    display: block;
    position: absolute;
    top: 50px;
    left: 15px;
}
.encards-title::after{
    content: '';
    width: 22%;
    height: 2px;
    background: #6d6058;
    display: block;
    float: right;
    position: absolute;
    top: 50px;
    right: 15px;
}
.encards-title h2{
    font-size: 60px;
    color: #6d6058;
    line-height: 1;
}
.encard{
    padding: 0 8px;
}
.encard-title{
    color: #517cac;
    font-size: 22px;
    text-transform: uppercase;
}
.encard-figure img{
    width: 100%;
    max-height: 388px;
}
@media screen and (max-width: 860px) { 
    .encards-title::before,
    .encards-title::after{
        display: none;
    }
    .container-encards{
        width: 80%;
    }
} 
@media screen and (max-width: 425px) { 
    #encards{
        padding: 20px 0 !important;
    }
    .encards-title h2{
        font-size: 35px;
    }
    .container-encards{
        width: 80%;
    }
} 
</style> 