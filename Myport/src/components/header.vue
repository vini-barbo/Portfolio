@ -1,74 +0,0 @@
<script>
export default {
  name: 'headerApp'
}
</script>

<template>
  <main class="content">
    <section class="content-text">
      <h1>HI, I'm Vinicius </h1>
      <h2>Frontend developer</h2> 
    </section>
    <section class="content-image">
      <div class="img-frame">
        <img src="me.jpg" alt="Imagem de perfil">
      </div>
    </section>
  </main>
</template>

<style scoped>

h1,h2{
  filter: blur(0); /* Adjust the blur radius as needed */
  opacity: 1.0; 
  width: 100%;
  color: #343d68;
}
h1{
  font-size:4rem;
}
h2{
  font-size: 2rem;
}

.content-text{
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  padding-left: 20px;
  padding-bottom: 40px;
  
   /* Adjust the blur radius as needed
   background: radial-gradient(#9198e5,#dadbeb );
   filter: blur(400px); 
    opacity: 0.4; 
  border-radius: 50%;*/

}
.content-image{
  display: flex;
  height: 100%;
  width: 50%;
  align-items: center;
  justify-content: center;
}

.img-frame{
  width: 50%;
  height: 50%;
  border-radius: 10px;
}

img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

</style>
