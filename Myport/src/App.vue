<script>
import apple_section from './components/apple_section.vue';

export default{
  name:'app',

  components: { apple_section },

    data() {
        return {
            section_animation: ["width: 60vw; background-color: #eceff1;"],
        };
    },
    methods: {
        change_section_style_big() {
            this.section_animation = ["width: 70vw; background-color: #eceff1;"];
        }
    },
    
}


</script>

<template>
  <main>
    <apple_section>
    </apple_section>

  </main>
</template>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;800&display=swap');

*{
  font-family: 'Open Sans', sans-serif;
  font-weight: 500;
  margin: 0;
  padding: 0;
  display: block;
}


main{
  width: 100vw;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  overflow: hidden;
  margin-top: 40px;
}


</style>
