<template>
  <UIContentArea color="#f5fcff">
    <section class="w-full flex flex-col gap-1 md:gap-8 md:mx-8">
      <aside class="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div class="card md:!hidden" v-for="c in 3">
          <div class="cardTextSide">
            <div class="cardImage">
              <img src="/github.svg" alt="" />
            </div>
          </div>
          <div class="cardImageSide">
            <h4>UFRPE</h4>
            <p>In this company I worked as a Teacher</p>
          </div>
        </div>

        <div class="hidden md:flex md:flex-col md:text-center md:gap-2" v-for="c in 3">
          <h4>Arena Fantasy</h4>
          <div class="cardImage">
            <img src="/github.svg" alt="" />
          </div>
          <p>In this company I worked as a <br>Front-end Developer</p>

        </div>
      </aside>
    </section>
  </UIContentArea>
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
  @apply flex items-center justify-between  gap-5  p-4 rounded-md md:flex-col;
}

.cardMd {
  @apply flex items-center justify-between  gap-5  p-4 rounded-md md:flex-col;
}

.cardImage {
  @apply h-16 aspect-square flex  justify-center items-center;
}

h4 {
  @apply font-bold text-xl md:text-[2vw];
}

p {
  @apply font-normal;
}
</style>
