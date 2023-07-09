<script>

export default{
  data(){
   return{
    section_animation : ["width: 60vw; background-color: #eceff1;"],
   }
  },

  methods : {
    change_section_style_big(){
      this.section_animation = ["width: 70vw; background-color: #eceff1;"]
    }
  }


}


</script>

<template>
  <main>
    <section class="meetbarbosa_1" on-mousedown="change_section_style_big" style="section_animation" >
    </section>
    <section class="2">
    </section>
    <section class="3">
    </section>
    <section class="4">
    </section>
    <section class="5">
    </section>

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

section{  
  width: 50vw;
  text-align: center;
  background-color: #eceff1;
  border-radius: 20px;
  height: 40vh;
  margin-top: 40px;
  transition: 0.5s; 
  transition-timing-function: ease;
}

section:hover{
  width: 52vw;
  height: 42vh;
  background-color: white;
  box-shadow: 0.5px 0.5px 2px 2px #7a7a7a;
}




</style>
