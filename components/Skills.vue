<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8 md:mx-8">
      <h2 class="subtitle">My skills</h2>
      <h1 class="title">My Expertise</h1>
      <aside class="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div class="card">
          <div><h4>Node.JS</h4></div>
          <div class="cardImage">
            <img src="/nodejs-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div><h4>TypeScript</h4></div>
          <div class="cardImage">
            <img src="/typescript-2.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div><h4>Vue</h4></div>
          <div class="cardImage">
            <img src="/vue-9.svg" alt="" />
          </div>
        </div>
        <div class="card">
          <div>
            <h4>Postgres</h4>
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
.card {
  @apply flex flex-col-reverse gap-2 text-center p-1 rounded-md w-[150px] md:w-[180px];
}

.cardImage {
  @apply h-full flex justify-center items-center;
}

h4 {
  @apply font-bold text-xl md:text-[2vw];
}
</style>
