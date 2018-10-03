<template>
    <section id="info">
        <div class="container-info">
            <div class="row">
                <article class="sub-title col-lg-12">
                    <h1>Todo dia tem<br> ofertas pra você!</h1>
                </article>
                <div v-for="figure in figures" :key="figure.link" class="col-md-4 col-lg-4 info-item">
                    <a :href="figure.link">
                        <figure class="info-figure">
                            <img :src="figure.img" alt="figure.img" class="d-block mx-auto">
                        </figure>
                    </a>
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
            figures: [
                {
                    link: '',
                    img: 'static/imgs/segunda-da-fruta.png'
                },
                {
                    link: '',
                    img: 'static/imgs/ter-quar-qui-da-carne.png'
                },
                {
                    link: '',
                    img: 'static/imgs/fim-de-semana.png'
                }
            ]
            
        }
    }
}
</script>


<style scoped>
#info{
    margin-top: 40px;
}
.container-info{
    margin: 0 auto;
    width: 820px;
}
.sub-title{
    position: relative;
    width: 100%;
    color: #e15c25;
    text-transform: uppercase;
    font-weight: 900;
    margin-bottom: 0px;
}
.sub-title h1{
    font-family: 'Gotham Black';
    font-weight: 900;
    font-size: 50px;
    text-align: center;
}
.info-item {
    padding: 0 8px;
}
.info-figure img{
    width: 100%;
}
@media screen and (max-width: 860px) { 
    .container-info{
        width: 85%;
    }
} 
@media screen and (max-width: 768px) {
    
    .info-figure img{
        width: 80%;
    }
}
@media screen and (max-width: 425px) {
    .sub-title h1{
        font-size: 35px;
    }
}
</style>
