<script>
import headerApp from './components/header.vue'
import skillApp from './components/skill.vue'
import projectsApp from './components/projects.vue'
import contactApp from './components/contact.vue'
import footerApp from './components/footer.vue'
import navbarApp from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    headerApp,
    skillApp,
    projectsApp,
    contactApp,
    footerApp,
    navbarApp
  }
}
</script>

<template>
  <main class="app">
    <navbarApp></navbarApp>
    <headerApp style="background: #191e29"></headerApp>
    <skillApp style="background: #1b212f"></skillApp>
    <projectsApp style="background: #191e29"></projectsApp>
    <contactApp style="background: #1b212f"></contactApp>
    <footerApp style="background: #191e29"></footerApp>
  </main>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Comfortaa&family=Gabarito&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap');

* {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  border: 0;
}

h1 {
  font-family: 'Inter', 'sans-serif';
  font-size: 3rem;
  font-weight: bold;
  text-shadow: #8788a9 1px 2px;
  color: #42446e;
}

.app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bar {
  width: 90vw;
  height: 70vh;
  display: flex;
  justify-content: space-between;

  background: #c0dce3;
  border-radius: 10px;
}

.content {
  width: 100dvw;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
