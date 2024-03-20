<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8 md:mx-8">
      <h2 class="subtitle">My projects</h2>
      <h1 class="title">My Portfolio</h1>
      <aside class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4">
        <div class="card">
          <div class="cardImage">
            <img src="/projectsample.png" alt="" />
          </div>
          <div class="cardText">
            <div class="cardTextTitle">
              <h3>Spotify Clone</h3>
              <p><mark class="text-yellow-400">In progress</mark></p>
            </div>
            <div class="cardTextDesc">
              <p>
                This project is an experiment, that i'm realizing aiming to
                understand better the concepts of fullstack development.
              </p>
            </div>
            <div class="w-full h-[1px] bg-[#868686]"></div>
            <div class="flex flex-col gap-4">
              <span class="font-normal text-base ml-1">Stack:</span>
              <div class="cardTechs">
                <div>Node</div>
                <div>React</div>
                <div>Typescript</div>
                <div>Postgres</div>
              </div>

              <div class="cardTextLinks">
                <a> View </a>
                <a> Repo </a>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="cardImage">
            <img src="/projectsample.png" alt="" />
          </div>
          <div class="cardText">
            <div class="cardTextTitle">
              <h3>This portfolio</h3>
              <p><mark class="text-transparent">Done</mark></p>
            </div>
            <div class="cardTextDesc">
              <p>
                My personal portfolio where i'm show my potencial and
                captabilites and stuff and things.
              </p>
            </div>
            <div class="w-full h-[1px] bg-[#868686]"></div>
            <div class="flex flex-col gap-4">
              <span class="font-normal text-base ml-1">Stack:</span>
              <div class="cardTechs">
                <div>Node</div>
                <div>React</div>
                <div>Typescript</div>
                <div>Postgres</div>
              </div>

              <div class="cardTextLinks">
                <a> View </a>
                <a> Repo </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
* {
  @apply text-main-fontBlack;
}

.techSpace {
  @apply flex flex-col gap-1;
}

.cardTextDesc p {
  height: 60px;
}

.cardTechs {
  @apply grid gap-2 grid-cols-4;
}

.cardTechs div {
  @apply flex justify-center items-center  bg-main-mark3 px-[1px] py-1 text-white rounded-full w-full text-[11px];
}

.card {
  @apply flex flex-col  shadow-md gap-1  rounded-md w-[1fr]
  md:w-[4fr];
}

.cardImage {
  @apply h-[250px] w-full aspect-square bg-white rounded-md;
}

.cardText {
  @apply flex flex-col h-full gap-2 px-5;
}

.cardTextLinks {
  @apply flex gap-10 text-base mt-4 uppercase ml-1 h-9;
}

.cardTextTitle{
  @apply text-[12px] mt-2;
}

.cardTextTitle p {
  @apply text-[12px] my-0.5;
}

p {
  @apply text-sm font-normal text-[#5b5b5b] text-justify;
}

mark {
  background-color: white;
}

h3 {
  @apply font-semibold text-2xl 2xl:text-[1.2vw];
}

a {
  @apply text-main-mark2 cursor-pointer;
}
</style>
