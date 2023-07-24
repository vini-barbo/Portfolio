<script>
import meet_barbosa from './components/apple_section/MeetBarbosa.vue';
import meet_tecno from './components/apple_section/MeetTecno.vue';
import SlideSelector from './components/apple_section/SlideSelector.vue';

export default{
  name:'app',

  components: { meet_tecno, meet_barbosa, SlideSelector },

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
    <meet_barbosa></meet_barbosa>
    <SlideSelector></SlideSelector>
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
}

meet_barbosa{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}

SlideSelector{
  width: 100%;
}


</style>
