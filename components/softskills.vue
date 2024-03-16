<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 sm:gap-8 sm:mx-8">
      <h2>My skills</h2>
      <h1>My Expertise</h1>
      <aside class="grid sm:grid-cols-4 gap-6">
        <div class="card" v-for="c in 4">
          <div class="cardImage">
            <img src="/bachelor.svg" alt="" />
          </div>
          <div class="cardText">
            <h3>Experience as a Teacher</h3>
            <h4>
              I bring valuable teaching experience to the table, enabling me to
              explain complex technical concepts clearly and supportively to
              diverse audiences.
            </h4>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
.card {
  @apply flex flex-col gap-2 text-center p-3 rounded-md w-[1fr] sm:w-[1fr] bg-main-blue;
}

.cardImage {
  @apply h-20 w-fit aspect-square bg-white rounded-md p-4;
}

.cardText {
  @apply flex flex-col gap-2 text-left;
}

h3 {
  @apply font-bold text-xl sm:text-[2vw];
}

h4 {
  @apply font-normal;
}

h1 {
  @apply font-bold text-4xl sm:text-[5vw] sm:leading-[2.8rem];
}
</style>
