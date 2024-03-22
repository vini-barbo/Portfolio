<template>
  <div>
    <UIContentArea color="#f5fcff">
      <section class="grid gap-3 md:grid-cols-2">
        <div>
          <span
            class="flex flex-col gap-3 md:gap-9 md:h-full md:justify-center"
          >
            <h2>Hey, I'm</h2>
            <h1><mark>Vinicius Barbosa</mark></h1>
            <h1>FullStack developer</h1>
            <h2>
              I can make your <mark>idea</mark> becomes <mark>reality</mark>
            </h2>
            <span>
              <UIButton text="Check my resume" />
            </span>
          </span>
        </div>
        <div>
          <img src="/myphotoedited.png" alt="" />
        </div>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
h2 {
  @apply font-semibold text-[18px] md:text-[2.7vw] md:leading-[2.8rem];
}
h1 {
  @apply font-bold text-4xl md:text-[4vw] md:leading-[2.8rem];
}

h1 mark {
  @apply font-bold text-3xl md:text-[4vw] md:leading-[2.8rem];
}

mark {
  @apply bg-transparent text-main-mark2;
}
</style>
