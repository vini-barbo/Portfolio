<template>
  <UIContentAreaClean>
    <section class="flex flex-col h-full justify-start text-center">
      <div><h2>My Projects</h2></div>
      <aside class="cardSpace">
        <div class="card">
          <div class="cardImage">
            <img src="/nuxt-2.svg " alt="" />
          </div>
          <div class="cardTextSpace">
            <div>
              <h1>This portfolio</h1>
            </div>
            <div>
              <h2></h2>
              Status: <a style="color: green">Done</a>
            </div>
            <div>
              <h2></h2>
              Stack: Vue3 | Node | Typescript | AWS
            </div>
            <div class="cardLinkButton">
              <div class="linkButton">
                <img src="/screen.svg" alt="" />
                <div class="linkButtonText">Demo</div>
              </div>
              <div class="linkButton">
                <img src="/github.svg" alt="" />
                <div class="linkButtonText">Repo</div>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="cardImage">
            <img src="/spotify-2.svg" alt="" />
          </div>
          <div class="cardTextSpace">
            <div>
              <h1>Spotify Clone</h1>
            </div>
            <div>
              <h2></h2>
              Status: <a style="color: #febe00">In progress</a>
            </div>
            <div>
              <h2></h2>
              Stack: Node | React | Typescript | PostgresSQl
            </div>
            <div class="cardLinkButton">
              <div class="linkButton">
                <img src="/screen.svg" alt="" />
                <div class="linkButtonText">Demo</div>
              </div>
              <div class="linkButton">
                <img src="/github.svg" alt="" />
                <div class="linkButtonText">Repo</div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </UIContentAreaClean>
</template>

<style scoped>
.cardLinkButton {
  @apply flex justify-center;
}

.linkButton {
  @apply p-3 border w-full flex max-h-12 justify-center gap-4 uppercase border-l align-middle font-bold cursor-pointer;
}

.linkButtonText {
  @apply flex justify-center items-center;
}

.card {
  @apply flex flex-col w-[75%]  text-center  rounded-md;
  aspect-ratio: 1/1.5;
  box-shadow: 1px 1px 1px 1px rgb(120, 120, 120, 0.5);
  overflow: hidden;
}

.cardImage {
  @apply h-1/2 flex justify-center items-center;
}

.cardSpace {
  @apply flex flex-wrap justify-center gap-10;
  color: #2f2e41;
  font-weight: 600;
}

.cardTextSpace {
  @apply w-full h-full bg-white flex flex-col justify-between;
  box-shadow: 1px 1px 1px 2px rgb(120, 120, 120, 0.5);
}

h1 {
  color: #1953d1;
  font-size: 200%;
  font-weight: 700;
}
h2 {
  color: #2f2e41;
  font-size: 200%;
  font-weight: 500;
}
</style>
