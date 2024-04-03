<template>
  <UIContentArea >
    <section class="grid md:grid-cols-1  gap-32 ">
      <!-- <aside class="flex flex-col gap-4">
        <div class="gridHeader">
          <h2 class="subtitle text-center md:ml-1 md:text-left md:mb-4">
            Get in touch
          </h2>
          <h1 class="title md:my-5 text-center md:text-left">
            Send me a message
          </h1>
        </div>

        <form action="" class="grid md:grid-cols-2 grid-row-e md:grid- gap-2">
          <div v-for="c in ['Nome', 'Email', 'Topic', 'Phone']">
            <label for="">{{ c }}</label>
            <input type="text" :placeholder="c" />
          </div>
          <div class="md:col-span-2">
            <label for="">Message</label>
            <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
        </form>
      </aside> -->
      <aside class="flex flex-col gap-4">
        <div class="gridHeader">
          <h2 class="subtitle text-center md:ml-1 md:text-left md:mb-4">
            Get in touch
          </h2>
          <h1 class="title md:my-5 text-center md:text-left">
            Send me a message
          </h1>
        </div>
        <div class="grid grid-cols-2 gap-5 text-center">
          <div>
            <div>Linkedin</div>
            <div class="h-20">
              <a>
                <img src="/linkedin-icon-2.svg" alt="Linkedin link" />
              </a>
            </div>
          </div>
          <div>
            <div>Github</div>
            <div class="h-20">
              <a href="">
                <img src="/github.svg" alt="" />
              </a>
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
              class="border p-3 rounded-md flex items-center"
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

.gridHeader {
  @apply flex flex-col gap-2;
}

input,
textarea {
  @apply py-2.5 md:py-4 rounded-md px-1 w-full border border-main-mark3;
}

form div {
  @apply flex flex-col w-full gap-2;
}
</style>
