<template>
  <UIContentArea color="#f5fcff">
    <section class="grid md:grid-cols-2 md:mx-8">
      <aside class="flex flex-col gap-4">
        <div>
          <h2 class="subtitle text-center md:ml-1 md:text-left">
            get in touch
          </h2>
          <h1 class="title md:my-5 text-center md:text-left">Contact me!</h1>
        </div>
        <span class="flex flex-col w-[100%] md:w-[80%] justify-start gap-3">
          <form action="" class="grid grid-cols-1 gap-2">
            <div v-for="c in 4">
              <label for="">Elemento a ser preenchido</label>
              <input type="text" placeholder="teste" />
            </div>
          </form>
        </span>
      </aside>
      <aside class="flex flex-col gap-4">
        <div>
          <h2 class="subtitle text-center md:ml-1 md:text-left">
            get in touch
          </h2>
          <h1 class="title md:my-5 text-center md:text-left">Contact me!</h1>
        </div>
        <div class="grid grid-cols-2 gap-5 text-center ">
          <div>
            <div>Linkedin</div>
            <div class="">
              <a>
                <img src="/linkedin-icon-2.svg" alt="Linkedin link" />
              </a>
            </div>
          </div>
          <div>
            <div>Github</div>
            <div>
              <img src="/github.svg" alt="" />
            </div>
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
* {
  @apply text-main-fontBlack;
}

input {
  @apply py-2.5 rounded-md px-1 w-full border border-main-mark3;
}

form div {
  @apply flex flex-col w-full gap-2;
}
</style>
