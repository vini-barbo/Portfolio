<script>
    export default{
        name:'meet_barbosa'
    }
</script>

<template>
    <section>
    <main>
        <div class="text">
            <h1>MEET BARBOSA</h1>
            <h2>Front-end developer for smart companies</h2>
            <div class="icons">
                <button  href="/" target="_blank"><i class="fab fa-github"></i></button>
                <button  href="/" target="_blank"><i class="fa-brands fa-linkedin"></i></button>
                <button  href="/" target="_blank" > <i class="fa fa-envelope" aria-hidden="true"></i></button>
            </div>
        </div>
    </main>
    </section>
</template>

<style scoped>
/*Stylization of the main part*/
section{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    width: 90vw;
    height: 70vh;
    background-color: #eceff1;
    border-radius: 20px;
    text-align: center;
  }
  
section:hover{
    background-color: white;
    box-shadow: 0.5px 0.5px 2px 2px #ded5d5;
  }

main{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr ;
    gap: 0;
    
}

/*text section*/

h1,h2,div.icons{
    text-align: start;
    margin:0;
    margin-left: 2%;
    width: 70%;
}

h1{
    font-size: clamp(2rem,5vw + 0.5rem,8rem);
    
}

h2{
    font-size: clamp(0.5rem,1vw + 0.5rem,4rem);
    color: #a1a1a1;
    width: 45%;
}


/*icons section*/

div.icons {
    
    background-color: transparent;
    border-radius: 5px;
    margin-top: 5%;
    display: flex;
    justify-content: space-between;
    width: 40%;
}


button{
    color: #a1a1a1;
    font-size: clamp(4rem,5vw + 1rem,8rem);
    background-color: transparent;
    border-radius: 5px;
    border: none;
    cursor: pointer;
}

</style>