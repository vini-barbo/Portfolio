<script setup lang="ts">
const yearsOfExperience = ref(Math.abs(new Date().getFullYear() - 2023));

</script>

<template>
  <div>
    <UIContentArea  color="blue" class="flex flex-col gap-12">

      <section class="grid gap-1 md:gap-8 md:grid-cols-1 ">
          <!-- <div class="w-full h-full">
            <div class="2xl:max-h-[20vw] 2xl:aspect-square 2xl:flex 2xl:justify-end">
              <img src="/myphotoedited.png" alt="" />
            </div>
          
        </div> -->
        <span class="flex flex-col w-[100%] md:w-[80%] justify-start  gap-3 2xl:max-h-[20vw] 2xl:aspect-square">
          <h2 class="subtitle md:ml-1">About</h2>
          <h1 class="title md:my-5 2xl:my-8">About me</h1>
          <p class="regularText">
            As a <mark>mid-level developer</mark> with a passion for technology
            and innovation,
            <p class="regularText"></p>
            I am driven by the opportunity to
            <mark>work remotely overseas</mark>
            and contribute to impactful projects worldwide.
          </p>
          <p class="regularText">

            With <mark> over {{ yearsOfExperience }} year{{ yearsOfExperience < 1 ? 's' : ''}} of experience</mark> in <mark>Vue</mark> as
            Frontend and <mark>Node</mark> as Backend , I have honed my skills
            in <mark>creating, deploying, and supporting</mark> a wide range of
            applications.
          </p>
          <p class="regularText">
            Whether it's<mark>developing</mark> robust backend systems, crafting
            intuitive user interfaces, or optimizing performance, I am adept at
            tackling complex challenges and delivering
            <mark>high-quality solutions.</mark>
          </p>
        </span>
        

              <Experience >
      </Experience>

      </section>

    </UIContentArea>

  </div>
</template>

