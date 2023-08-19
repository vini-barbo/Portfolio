<script>
    export default{
        name:'CertificationApp'
    }
</script>

<template>
<main class="bar">
    <div class="text" >
            <h1>I'm Vinicius Barbosa</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit excepturi nisi modi assumenda rem sequi at enim saepe aperiam, dolores, aspernatur vero illum soluta dolor obcaecati! Soluta excepturi repudiandae eum?</p>
    </div>
    <div class="icons">
                <button  href="/" target="_blank"><i class="fab fa-github"></i></button>
                <button  href="/" target="_blank"><i class="fa-brands fa-linkedin"></i></button>
                <button  href="/" target="_blank" > <i class="fa fa-envelope" aria-hidden="true"></i></button>
    </div>

</main>
</template>

<style scoped>
/*Stylization of the main part*/
  



/*text section*/

.text{
    width: 40%;
}

p{
    text-align: left;
    text-justify: distribute;
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