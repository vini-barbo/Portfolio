
<script>
import navbarApp from "./navbar.vue"
export default {
  name: 'headerApp',
  components:{
    navbarApp
  }
}
</script>

<template>
  <main class="content">
    <navbarApp></navbarApp>
    <div class="grid-conteiner">
      <div class="grid-box" v-for="box in 700"></div>
    </div>
    <div class="content-padding">
    <section class="content-text">
      <h1>HI, I'm Vinicius </h1>
      <h2>Frontend developer</h2> 
    </section>
    <section class="content-image">
      <div class="img-frame">
        <img src="me.jpg" alt="Imagem de perfil">
      </div>
    </section>
  </div>
  </main>
</template>

<style scoped>

*{
  font-family: 'Gabarito', cursive;
}
.content{
  display: flex;
  flex-direction: column;
  gap: 0;
}


.content-padding{
  z-index: 1;
  width: 90%;
  display: flex;
}

h1,h2{
  width: 100%;
  color: white;

}
h1{
  font-size: clamp(3rem, 10vw, 8rem) ;
}



h2{
  font-weight: bolder;
  font-size: 4rem;
  color: #5a7ffb
}

.content-text{
  width: 50%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  padding-bottom: 40px;
  
}
.content-image{
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
}

.img-frame{
  width: 70%;
  height: 80%;
  border-radius: 10px;
}

img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.grid-conteiner{
  position: absolute;
  width: 100dvw;
  height: 100dvh;
  display: grid;
  grid-template-columns: repeat(25,1fr);
  grid-template-rows: repeat(25,1fr);
  gap: 0.1px;
  background: #1b212f;
  overflow-x: hidden;
  overflow-y: hidden;
  z-index: 0;
}


.grid-box{
  border: 2px solid #1b212f;
  background: rgb(25, 30, 41);
  aspect-ratio: 1/1;
  width: 70px;
  margin: 0;
  padding: 0;
  gap: 0px;
}

</style>
