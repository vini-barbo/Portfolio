<script>
export default {
  name: 'navbarApp'
}
</script>

<template>
  <main class="content">
    <section class="logo"> Vinicius Barbosa</section>
    <section class="nav">
      <div>Projects</div>
      <div>Skills</div>
      <div>About me</div>
      <div>Contact</div>
      <div>
        <span>PT-BR </span>
        <span>ENG</span>
      </div>
    </section>

  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');

*{
  font-family: 'Comfortaa', cursive;
}

.content{
  background: #191e29;
    height: 5dvh;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
    gap: 20px;
    color: white;
    

}
div{
    color: white;
    
}

.nav{
  display: flex;
  height: 100%;
  gap: 20px;
  align-items: center;

}

.nav div{
  cursor: pointer;

}

.logo{
  font-size: 1.5rem;
}


</style>

