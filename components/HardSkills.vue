<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8">
      <h1 class="title">Tech stack</h1>
      <aside class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="card">
          <h4>Backend</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img class="rounded-md" src="/typescript.svg" alt="" />
              </div>
              <p>TypeScript</p>
            </div>
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/nodejs.svg" alt="" />
              </div>
              <p>NodeJs</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Frontend</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/vue.svg" alt="" />
              </div>
              <p>Vue</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img src="/tailwind.svg" alt="" />
              </div>
              <p>Tailwind</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Database</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/postgresql.svg" alt="" />
              </div>
              <p>PostgresSql</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img src="/prisma.svg" alt="" />
              </div>
              <p>Prisma</p>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
* {
  @apply text-main-fontBlack;
}

.cardGrid {
  @apply grid gap-9 text-center md:gap-8;
}

.card {
  @apply flex flex-col items-center gap-7 p-3 rounded-md border md:gap-10 border-main-mark3;
}

.imagePlace {
  @apply flex flex-col justify-center align-middle gap-2 text-center;
}

.cardImage {
  @apply h-20 md:h-24 aspect-square flex  justify-center items-center;
}

h4 {
  @apply font-bold text-2xl md:text-[2vw];
}

p {
  @apply font-normal;
}
</style>
