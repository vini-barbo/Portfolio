<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8 ">
      <h1 class="title">Stack</h1>
      <aside class="grid grid-cols-1 md:grid-cols-4 gap-3">
        <div class="card">
          <div class="cardText">
            <h4>TypeScript</h4>
            <p>This tech is made with code and love by they developers</p>
          </div>
          <div class="cardImage">
            <img src="/typescript-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div class="cardText">
            <h4>Node</h4>
            <p>This tech is made with code and love by they developers</p>
          </div>
          <div class="cardImage">
            <img src="/nodejs-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div class="cardText">
            <h4>Vue</h4>
            <p>This tech is made with code and love by they developers</p>
          </div>
          <div class="cardImage">
            <img src="/vue.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div class="cardText">
            <h4>PostgresSql</h4>
            <p>This tech is made with code and love by they developers</p>
          </div>
          <div class="cardImage">
            <img src="/postgresql.svg" alt="" />
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

.card {
  @apply flex items-center justify-between  gap-5  p-4 rounded-md md:flex-col border border-main-mark3;
}

.cardImage {
  @apply h-16 aspect-square flex  justify-center items-center;
}

.cardText {
  @apply mb-5 flex flex-col gap-3;
}

h4 {
  @apply font-bold text-xl md:text-[2vw];
}

p {
  @apply font-normal;
}
</style>
