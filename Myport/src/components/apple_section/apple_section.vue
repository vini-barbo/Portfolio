<script>
    export default{
        props:['sectionStyleWidth','sectionStyleHeight'],
        name:'apple_section'
    }
</script>

<template>
    <section :style="{ 'width':sectionStyleWidth, 'height':sectionStyleHeight}">
        test
    </section>

</template>

<style scoped>

section{
    text-align: center;
    background-color: #eceff1;
    border-radius: 20px;
    margin-top: 40px;
    transition: 0.5s; 
    transition-timing-function: ease;
  }
  
section:hover{
    background-color: white;
    box-shadow: 0.5px 0.5px 2px 2px #ded5d5;
  }

</style>