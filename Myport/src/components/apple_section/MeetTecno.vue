<script>
    export default{
        props:['sectionStyleWidth','sectionStyleHeight'],
        name:'meet_tecno'
    }
</script>

<template>
    <section :style="{ 'width':sectionStyleWidth, 'height':sectionStyleHeight}">
        <main>
            <div class="icons">
                <span>
                    <p>VUE.Js</p>
                    <i class="fa-brands fa-vuejs"></i>
                </span>
                <span>
                    <p>CSS3</p>
                    <i class="fab fa-css3"></i>
                    
                </span>
                <span>
                    <p>HTML5</p>
                    <i class="fab fa-html5"></i>
                </span>
                <span>
                    <p>JavaScript</p>
                    <i class="fa-brands fa-js"></i>
                </span>
		        <span>
                    <p>Python</p>
                    <i class="fab fa-python"></i>
                </span>
                <span>
                    <p>SQL</p>
                    <i class="fas fa-database"></i>
                </span>
                <span>
                    <p>Docker</p>
                    <i class="fa-brands fa-docker"></i>
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

div.icons{
    width: 100%;
    height: 100%;
    font-size: 4rem;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

}

p{
    font-size: 2rem;
}
</style>