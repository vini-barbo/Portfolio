<template>
  <UIContentArea>
    <section class="flex flex-col h-full justify-start text-center">
      <div><h2>My Projects</h2></div>
      <aside class="cardSpace">
        <div class="card" v-for="c in 5">
          <div class="cardImage">
            <img src="/nodejs-2.svg" alt="" />
          </div>
          <div class="cardTextSpace">
            <div>
              <h1>Spotify Clone</h1>
            </div>
            <div>
              <h2></h2>
              Status: In progress
            </div>
            <div>
              <h2></h2>
              Stack: Node | React | Typescript | PostgresSQl
            </div>
            <div class="cardLinkButton">
              <div class="linkButton">
                <img src="/linkedin-icon-2.svg" alt="" />
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
  </UIContentArea>
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

h2 {
  color: #6c63ff;
  font-size: 300%;
  font-weight: 600;
}
</style>
