<script>
    export default{
        props:['sectionStyleWidth','sectionStyleHeight'],
        name:'meet_barbosa'
    }
</script>

<template>
    <section :style="{ 'width':sectionStyleWidth, 'height':sectionStyleHeight}">
    <main>
        <div class="text">
            <h1>MEET BARBOSA</h1>
            <h2>Front-end developer</h2>
        </div>
        <div class="icons">
            <span>
                <button class="fab fa-github"></button>
            </span>
            <span>
                <button class="fa-brands fa-linkedin"></button>
            </span>
            <span>
                <button class="fa fa-envelope" aria-hidden="true"></button>
            </span>
        </div>
    </main>
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

main{
    width: 100%;
    height: 100%;
    display: flex;
    align-content: center;
    align-items: center;
    flex-direction: column;
}

main div{
    font-size: 2rem;
}

div.text{
    margin: 0;
}

div.icons{
    width: 60%;
    font-size: 6rem;
    display: flex;
    justify-content: space-around;

}

span{
}

</style>