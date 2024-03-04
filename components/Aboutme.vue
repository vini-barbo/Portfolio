<template>
  <UIContentArea>
    <div class="flex w-full justify-start flex-col gap-3">
      <section
        class="flex flex-wrap w-full min-h-[20dvh] justify-center align-middle roboto-medium"
      >
        <div class="flex flex-col w-1/2 h-full justify-center items-center">
          <span class="flex flex-col h-full justify-start gap-8">
            <h2>About me</h2>
            <h3>
              I am a Brazilian <a>Full Stack developer </a>
              <p></p>
              actively pursuing <a>remote job</a>
              <p></p>
              opportunities abroad<a>.</a>
            </h3>
          </span>
        </div>
        <div class="flex w-1/2 justify-center items-center">
          <img src="/apresentation.svg" class="h-full max-h-[50dvh]" />
        </div>
      </section>
    </div>
  </UIContentArea>
</template>

<style scoped>
a {
  color: #6c63ff;
}

h1 {
  color: #6c63ff;
  font-size: 450%;
  font-weight: 700;
}

h2 {
  color: #6c63ff;
  font-size: 300%;
  font-weight: 500;
}
h3 {
  font-size: 200%;
  font-weight: 400;
}
h4 {
  font-size: 200%;
  font-weight: 400;
}

span {
  color: #2f2e41;
}
</style>
