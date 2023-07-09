<script>
import apple_section from './components/apple_section/apple_section.vue';
import meet_barbosa from './components/apple_section/MeetBarbosa.vue';

export default{
  name:'app',

  components: { apple_section, meet_barbosa },

    data() {
        return {
        };
    },
    methods: {
    },
    
}


</script>

<template>
  <main>
    <meet_barbosa sectionStyleWidth="80vw" sectionStyleHeight="80vh"></meet_barbosa>
  </main>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

*{
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  margin: 0;
  padding: 0;
  border: 0;
  display: block;
}


main{
  margin-left: 0;
  width: 98vw;
  border: 0px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  overflow: hidden;
  margin-top: 40px;
  padding-bottom: 40px;
}


</style>
