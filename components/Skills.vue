<template>
  <UIContentArea color="#f5fcff">
    <section class="flex flex-wrap h-full justify-start gap-8 text-center">
      <aside class="cardSpace">
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
  @apply flex flex-col-reverse  text-center p-1 rounded-md;
  width: clamp(40px, 20%, 20vh);
  aspect-ratio: 1/1.2;
  
}

.cardImage {
  @apply h-full flex justify-center items-center;
}

.cardSpace {
  @apply flex flex-wrap justify-around gap-3;
  color: #2f2e41;
  font-weight: 600;
}

h2 {
  color: #5e3bee;
  font-size: 300%;
  font-weight: 600;
  text-align: left;
}

h4 {
  font-weight: 600;
  font-size: 80%;
}
</style>
