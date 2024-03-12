<template>
  <UIContentArea>
    <section class="flex flex-wrap h-full justify-start gap-8 text-center">
      <aside class="cardSpace">
        <div class="card" v-for="c in 4">
          <div class="cardImage">
            <img src="/nodejs-2.svg" alt="" />
          </div>
          <div>
            <h2>Moreno & alto</h2>
            <h4>!loren loren loren loren loren loren loren loren loren</h4>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
.card {
  @apply flex flex-col text-center p-3 rounded-md gap-2 bg-main-blue;
  width: 150px;
  aspect-ratio: 1/1.8;
}

.cardImage {
  @apply w-1/3 aspect-square  flex justify-center items-center bg-white p-1;
}

.cardSpace {
  @apply flex flex-wrap justify-around gap-3;
  color: #2f2e41;
  font-weight: 600;
}

h2 {
  @apply font-bold text-left  text-[110%];
}

h4 {
  @apply font-medium text-left  text-[80%];
}
</style>
