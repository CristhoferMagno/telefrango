<template>
    <div id="contatos">
        <div id="slide-contact" class="carousel slide carousel-fade w-100" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#slide-contact" data-slide-to="0" class="active"></li>
                <li data-target="#slide-contact" data-slide-to="1"></li>              
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active"> 
                    <gmap-map
                    v-bind:center="center"
                    v-bind:zoom="17"
                    style="width:100%;  height: 500px;"
                    >
                    <gmap-marker
                        v-bind:key="index"
                        v-for="(m, index) in markers"
                        v-bind:position="m.position"
                        @click="center=m.position"
                    ></gmap-marker>
                    </gmap-map>
                </div>
                <div class="carousel-item contato-content">
                    <header class="contato-content-text">
                        <div class="contato-container">
                            <h1>Nossas <br>lojas</h1>
                        </div>
                        <span class="d-block mb-3 mt-4">
                            <img src="static/imgs/span-locale.png" alt="span locale">
                        </span>
                        <h2>Loja granja portugal<br> rua vital brasil, 2821</h2>
                    </header>
                    <figure class="contato-figure">
                        <img src="static/imgs/background-map.png" alt="Frente de loja" class="img">
                    </figure>
                </div>
            </div>
            <a class="carousel-control-prev" href="#slide-contact" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#slide-contact" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: -3.776062, lng: -38.6059847 },
    };
  },

};
</script>

<style scoped>
.carousel-indicators li{
    width: 15px;
    height: 15px;
    border-radius: 50px;
    background: none;
    border: solid 2px #f2e368;
}
.carousel-indicators li.active{
    background-color: #f2e368;
}
.carousel-item{
    overflow: hidden;
}
.carousel-control-prev,
.carousel-control-next{
    display: none;
}
.carousel-indicators{
    bottom: 100px;
}
.contato-content-text{
    position: absolute;
    width: 100%;
    text-align: center;
    margin: 50px 0;
}
.contato-content-text h1{
    color: #f2e368;
    font-size: 50px;
    text-transform: uppercase;
    font-family: 'Gotham Black';
    line-height: 1;
}
.contato-content-text h2{
    color: #fff;
    font-family: 'Gotham Light';
    font-weight: 900;
    text-transform: uppercase;
    font-size: 30px;
    letter-spacing: 5px;
    line-height: 1.6;
    padding: 0 20px;
}
.contato-figure{
    margin: 0;
}
.contato-figure img{
    width: 100%;
    height: 500px;
}
.contato-container{
    position: relative;
    width: 700px;
    margin: 0 auto;
}
.contato-container::before{
    content: '';
    width: 25%;
    height: 2px;
    background: #f2e368;
    display: block;
    position: absolute;
    top: 50px;
    left: 15px;
}
.contato-container::after{
    content: '';
    width: 25%;
    height: 2px;
    background: #f2e368;
    display: block;
    float: right;
    position: absolute;
    top: 50px;
    right: 15px;
}
@media screen and (max-width: 768px) { 
    .contato-container::before,
    .contato-container::after{
        display: none;
    }
    .contato-container{
        width: 100%;
    }
} 
@media screen and (max-width: 768px) { 
    .contato-figure img{
        width: auto;
    }
} 
@media screen and (max-width: 550px) { 
    .carousel-indicators{
        bottom: 0px;
    }
} 
@media screen and (max-width: 425px) { 
    .contato-content-text h1{
        font-size: 35px;
    }
    .contato-content-text h2{
        font-size: 20px;
    }
    .contato-content-text{
       margin-top: 80px; 
    }
} 

</style>
