<script>
import headerApp from "./components/header.vue"
import skillApp from "./components/skill.vue"
import projectsApp from "./components/projects.vue"
import contactApp from "./components/contact.vue"
import footerApp from "./components/footer.vue"

export default{
  name:'app',
  components:{
    headerApp,
    skillApp,
    projectsApp,
    contactApp,
    footerApp
  }
}


</script>

<template>
  <main class="app">
    <headerApp></headerApp>
    <skillApp></skillApp>
    <projectsApp></projectsApp>
    <contactApp></contactApp>
    <footerApp></footerApp>
  </main>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

*{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  border: 0;
}

.app{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color:  linear-gradient(to bottom, #edecf9 , #8bd4f8) ;
}

.bar{
  width: 90vw;
  height: 70vh;
  display: flex;
  justify-content: space-between;

  background-color: #f5f3f3;
  border-radius: 10px;
}

.content{
  width: 90dvw;
  height: 95dvh;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
