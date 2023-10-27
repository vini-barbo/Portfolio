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
      <div class="icon-container">
        <i class="fab fa-vuejs"></i>
        <label class="icon-label">Vue.js</label>
      </div>

      <div class="icon-container">
        <i class="fab fa-node"></i>
        <label class="icon-label">Node.js</label>
      </div>

      <div class="icon-container">
        <i class="fab fa-html5"></i>
        <label class="icon-label">HTML5</label>
      </div>

      <div class="icon-container">
        <i class="fab fa-js"></i>
        <label class="icon-label">JavaScript</label>
      </div>

      <div class="icon-container">
        <i class="fab fa-css3-alt"></i>
        <label class="icon-label">CSS3</label>
      </div>

      <div class="icon-container">
        <i class="fas fa-database"></i>
        <label class="icon-label">SQL</label>
      </div>
    </section>
  </main>
</template>

<style scoped>

*{
  font-family: 'Comfortaa', cursive;
}

.icon-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
}

/* Style for the icon labels */
.icon-label {
  margin-top: 5px;
  text-align: center;
  font-size: 1.5rem;
}

.content {
  height: 70%;
  flex-direction: column;
  gap: 30px;
  padding-top: 20px;
}

.content-text {
  width: 100%;
  text-align: center;
  font-size: 2rem;
}

.content-icons {
  width: 70%;
  font-size: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  color: white;
}
</style>
