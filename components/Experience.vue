<template>
  <section class="w-full flex flex-col gap-1 md:gap-8">
    <h1 class="title">{{ $t('experienceCompanies') }}</h1>
    <aside class="w-full grid grid-cols-2   md:grid-cols-3  gap-5 gap-y-6 md:gap-8 ">
      <div class="card">
        <div class="cardImage">
          <img src="/arena-logo.jpeg" alt="Company logo arena fantasy" class="rounded-md" />
        </div>
      </div>

      <div class="card">
        <div class="cardImage">
          <img src="/UFRPE-logo.png" alt="University UFRPE logo " />
        </div>
      </div>
      <div class="card px-0.5 col-span-2 md:col-span-1 ">
        <div class="cardImage w-full">
          <img src="/datapriority-logo.png" alt="Company logo data priority" />
        </div>
      </div>
      <!-- <div class="card">
        <div class="cardImage">
          <img src="/cesar-logo.webp" alt="Company logo Cesar School" />
        </div>
      </div> -->
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
  @apply flex items-center justify-between gap-5 p-2 rounded-md flex-col md:py-4;
}

.cardImage {
  @apply h-20 aspect-square flex justify-center items-center md:h-32;
}

h4 {
  @apply font-bold text-xl md:text-[2vw];
}

.title {
  @apply text-3xl md:text-[3vw];
}

p {
  @apply font-normal;
}
</style>
