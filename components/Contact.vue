<template>
  <UIContentArea color="#f5fcff">
    <section class="flex flex-col h-full justify-start gap-8 text-center">
      <div><h2>Contact me!</h2></div>
      <aside class="cardSpace">
        <div class="card">
          <div>Linkedin</div>
          <div class="cardImage">
            <a>
              <img src="/linkedin-icon-2.svg" alt="Linkedin link" />
            </a>
          </div>
        </div>
        <div class="card">
          <div>Github</div>
          <div class="cardImage">
            <img src="/github.svg" alt="" />
          </div>
        </div>
        <div>
          <div>Send me an email</div>
          <div class="flex justify-between">
            <input
              class="border p-3 rounded-md"
              value="vinicius2508@hotmail.com"
              style="
                border-top-right-radius: 0px;
                border-bottom-right-radius: 0px;
              "
            />
            <div
              class="border p-3 rounded-md"
              style="
                border-top-left-radius: 0px;
                border-bottom-left-radius: 0px;
              "
            >
              <button>Copy</button>
            </div>
          </div>
        </div>
      </aside>
    </section>
  </UIContentArea>
</template>

<style scoped>
.card {
  @apply flex flex-col w-[35%] text-center p-5 rounded-md;
  aspect-ratio: 1/1.2;
}

.cardSpace {
  @apply flex flex-wrap justify-around gap-5;
  color: #2f2e41;
  font-weight: 600;
}

h2 {
  color: #1953d1;
  font-size: 300%;
  font-weight: 600;
}
</style>
