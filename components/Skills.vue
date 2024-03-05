<template>
  <UIContentArea>
    <section class="flex flex-col h-full justify-start gap-8 text-center">
      <div><h2>My stack</h2></div>
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
  color: #2f2e41;
  font-weight: 600;
}

h2 {
  color: #6c63ff;
  font-size: 300%;
  font-weight: 600;
}
</style>
