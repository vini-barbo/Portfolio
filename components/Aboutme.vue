<template>
  <div>
    <UIContentArea color="#f5fcff">
      <section class="grid gap-3 sm:gap-8 sm:grid-cols-2">
        <div>
          <img src="/myphotoedited.png" alt="" />
        </div>
        <span class="flex flex-col w-[100%] justify-start h-[100%] gap-3">
          <h2 class="subtitle">About</h2>
          <h1 class="title">About me</h1>
          <h4>
            As a <mark>mid-level developer</mark> with a passion for technology
            and innovation,
            <p></p>
            I am driven by the opportunity to
            <mark>work remotely overseas</mark>
            and contribute to impactful projects worldwide.
          </h4>
          <h4>
            With <mark> over 1 year of experience</mark> in <mark>Vue</mark> as
            Frontend and <mark>Node</mark> as Backend , I have honed my skills
            in <mark>creating, deploying, and supporting</mark> a wide range of
            applications.
          </h4>
          <h4>
            Whether it's<mark>developing</mark> robust backend systems, crafting
            intuitive user interfaces, or optimizing performance, I am adept at
            tackling complex challenges and delivering
            <mark>high-quality solutions.</mark>
          </h4>
        </span>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
h1 {
  font-size: 250%;
  font-weight: 700;
}

h3 {
  font-size: 15vw;
  font-weight: 300;
}
h4 {
  font-size: clamp(1dvh, 3vw, 3dvh);
  font-weight: 400;
}

mark {
  @apply bg-[#31bbf7] text-white px-0.5 py-0.5 rounded-sm;
  font-weight: 400;
}
</style>
