<template>
  <UIContentArea>
    <section class="flex flex-wrap justify-start gap-8 text-center">
      <aside class="cardSpace">
        <div class="card" v-for="c in 4">
          <div class="cardImage">
            <img src="/bachelor.svg" alt="" />
          </div>
          <div>
            <h2>Experience as a Teacher</h2>
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
  @apply flex flex-col text-center px-3 py-6 rounded-md gap-2 bg-main-blue grow max-w-[30dvh] w-[40%];
}

.cardImage {
  @apply w-1/3 aspect-square  flex justify-center items-center bg-white p-1;
}

.cardSpace {
  @apply flex flex-wrap justify-between w-full gap-3;
}

h2 {
  @apply font-bold text-left  text-[100%];
}

h4 {
  @apply font-medium text-left  text-[80%];
}
</style>
