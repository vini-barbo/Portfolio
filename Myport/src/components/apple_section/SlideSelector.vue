<script>

    export default{
        name: "SlideSelector"
    }

</script>

<template>
    <main>
    <section>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </section>
    </main>
</template>

<style scoped>

main{
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}

section{
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    gap: 10px;
}

div{
    width: clamp(4rem,6vw + 1rem,10rem);
    aspect-ratio: 10/1;
    background-color: #ded5d5;
    border-radius: 10px;
}

</style>