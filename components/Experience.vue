<template>
  <section class="w-full flex flex-col gap-1 md:gap-8">
    <h1 class="title">Field experience</h1>
    <aside class="w-full grid grid-cols-2 md:grid-cols-4 gap-5 gap-y-6 md:gap-8 ">
      <div class="card">
        <div class="cardImage">
          <img src="public/arena-logo.jpeg" alt="" class="rounded-md" />
        </div>
      </div>
      <div class="card px-0.5">
        <div class="cardImage w-full">
          <img src="public/datapriority-logo.png" alt="" />
        </div>
      </div>
      <div class="card">
        <div class="cardImage">
          <img src="public/UFRPE-logo.png" alt="" />
        </div>
      </div>
      <div class="card">
        <div class="cardImage">
          <img src="public/cesar-logo.webp" alt="" />
        </div>
      </div>
    </aside>
  </section>
</template>

<style scoped>
* {
  @apply text-main-fontBlack;
}

.cardTextSide {
  @apply flex h-full items-center;
}

.cardImageSide {
  @apply flex flex-col gap-2;
}

.card {
  @apply flex items-center justify-between  gap-5  p-2 rounded-md flex-col bg-white shadow-md md:py-4;
}

.cardImage {
  @apply h-20 aspect-square flex  justify-center items-center md:h-32;
}

h4 {
  @apply font-bold text-xl md:text-[2vw];
}

.title{
  @apply text-3xl md:text-[3vw];
}

p {
  @apply font-normal;
}
</style>
