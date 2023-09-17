<script>
export default {
  name: 'skillApp'
}
</script>

<template>
  <main class="content">
    <section class="content-text">
      <h1>Skills</h1>
    </section>
    <section class="content-icons">
      <i class="fa-brands fa-vuejs"></i>
      <i class="fa-brands fa-node"></i>
      <i class="fa-brands fa-html5"></i>
      <i class="fa-brands fa-js"></i>
      <i class="fa-brands fa-css3-alt"></i>
      <i class="fa-solid fa-database"></i>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

.content{
    height: 40dvh;
    flex-direction: column;
    gap : 30px
}

.content-text{
  width: 100%;
  text-align: center;
  font-size: 3rem;
}

.content-icons{
  width: 100%;
  font-size: 4rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

</style>

