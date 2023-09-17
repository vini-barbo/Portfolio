<script>
export default {
  name: 'projectsApp'
}
</script>

<template>
  <main class="content">
    <section class="content-text">
      <h1>Projects</h1>
    </section>
    <section class="content-projects">
      <h2>Coming soon...</h2>
    </section>
  </main>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

.content{
    height: 40dvh;
    flex-direction: column;
    gap: 20px;
}

h1,h2{
  color: black;

}

h1{
  font-size: 3rem;
}

h2{
  font-size: 2rem;
}


</style>

