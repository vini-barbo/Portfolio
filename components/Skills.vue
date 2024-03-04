<template>
  <UIContentArea>
    <section class="w-full flex flex-col justify-start">
      <div>Tech I know</div>
      <aside class="cardSpace">
        <div class="card">
          <div>Node.JS</div>
          <div class="cardImage">
            <img src="/nodejs-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>TypeScript</div>
          <div class="cardImage">
            <img src="/typescript-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>Git & Github</div>
          <div class="cardImage">
            <img src="/github.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>Vue</div>
          <div class="cardImage">
            <img src="/vue-9.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>Nuxt</div>
          <div class="cardImage">
            <img src="/nuxt-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>PostgresSql</div>
          <div class="cardImage">
            <img src="/postgresql.svg" alt="" />
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
.card {
  @apply flex flex-col w-[35%] text-center p-5 rounded-md;
  aspect-ratio: 1/1.2;
  box-shadow: 1px 1px 1px 1px rgb(120, 120, 120, 0.5);
}

.cardImage {
  @apply h-full flex justify-center items-center;
}

.cardSpace {
  @apply flex flex-wrap justify-around gap-5;
}
</style>
