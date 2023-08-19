<script>
    export default{
        name:'AboutApp'
    }
</script>

<template>
<main class="bar">
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
</template>

<style scoped>
/*Stylization of the main part*/ 

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