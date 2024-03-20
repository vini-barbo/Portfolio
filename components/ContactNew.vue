<template>
  <div>
    <UIContentArea color="#f5fcff">
      <section class="grid gap-3 md:gap-8 md:grid-cols-2">
        <span class="flex flex-col w-[100%] md:w-[80%] justify-start gap-3">
          <h2 class="subtitle text-center md:ml-1 md:text-left">
            get in touch
          </h2>
          <h1 class="title md:my-5 text-center md:text-left">Contact me!</h1>
          <form action="" class="grid grid-cols-1 gap-2">
            <div v-for="c in 4">
              <label for="">Elemento a ser preenchido</label>
              <input type="text" placeholder="teste" />
            </div>
          </form>
        </span>

        <div>
          <img src="/myphotoedited.png" alt="" />
        </div>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
input {
  @apply py-2.5 rounded-md px-1 w-full border border-main-mark3;
}

form div {
  @apply flex flex-col w-full gap-2;
}
</style>
