<script>
import HeaderApp from "./components/app/header.vue"
import CertificationApp from "./components/apple_section/Certifications.vue"
import ContactApp from "./components/apple_section/Contact.vue"
import AboutApp from "./components/apple_section/About.vue"
import MainApp from "./components/apple_section/Main.vue"
import SkillsApp from "./components/apple_section/Skills.vue"

export default{
  name:'app',

  components: {HeaderApp, CertificationApp, ContactApp , MainApp, AboutApp , SkillsApp },

    data() {
        return {
        };
    },
    methods: {
    },
    
}


</script>

<template>
  <main class="content">
    <HeaderApp></HeaderApp>
    <MainApp></MainApp>
    <AboutApp></AboutApp>
    <SkillsApp></SkillsApp>
    <CertificationApp></CertificationApp>
    <ContactApp></ContactApp>
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

.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.bar{
  width: 90vw;
  height: 70vh;
  display: flex;
  justify-content: space-between;

  background-color: #f5f3f3;
  border-radius: 10px;
}

</style>
