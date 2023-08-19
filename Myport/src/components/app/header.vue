<script>
export default{
    name:"HeaderApp"
}

</script>

<template>
    <main>
        <section>
            HOME
        </section>
        <nav>
            <button href="to">About me</button>
            <button  href="to">Skills</button>
            <button  href="to">Projects</button>
            <button  href="to">Certifications</button>
            <button  href="to">Contact me!</button>
        </nav>
    </main>
</template>

<style scoped>
main{
    width: 100%;
    height: 40px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
}

button{
    background: transparent;
    border: none;
    cursor: pointer;
}

nav{
    display: flex;
    gap:20px
}
</style>