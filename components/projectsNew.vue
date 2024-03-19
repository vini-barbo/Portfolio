<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8 md:mx-8">
      <h2 class="subtitle">My projects</h2>
      <h1 class="title">My Portfolio</h1>
      <aside class="grid md:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div class="card" v-for="c in 4" :key="c">
          <div class="cardImage">
            <img src="/projectsample.png" alt="" />
          </div>
          <div class="cardText">
            <h3>Spotify Clone</h3>
            <p>
              This project is an experiment, that i'm realizing aiming to
              understand better the concepts of fullstack development
            </p>
            <p>Status: <mark class="text-yellow-400">In progress</mark></p>
            <p>Stack: Node | React | Typescript | PostgresSQl</p>
          </div>
          <div class="cardLinkButton">
            <div class="linkButton">
              <img src="/screen.svg" alt="" />
              See the demo
            </div>
            <div class="linkButton">
              <img src="/github.svg" alt="" />
              Read the repo
            </div>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
.cardLinkButton {
  @apply flex justify-center;
}

.linkButton {
  @apply p-3 border w-full flex h-12 justify-center border-l align-middle font-bold cursor-pointer;
}

.linkButton img {
  @apply w-1/4;
}

.card {
  @apply flex flex-col justify-between shadow-md gap-8 rounded-md
  md:w-[4fr];
}

.cardImage {
  @apply h-[300px] w-full aspect-square bg-white rounded-md;
}

.cardText {
  @apply flex flex-col gap-2 px-5;
}

p {
  @apply font-normal text-2xl;
}

mark {
  background-color: white;
}

h3 {
  @apply font-semibold text-4xl md:text-[2vw];
}
</style>
