<template>
  <UIContentArea>
    <div class="flex w-full justify-start flex-col gap-3">
      <section
        class="flex flex-wrap w-full min-h-[20dvh] justify-center align-middle roboto-medium"
      >
        <div class="flex flex-col w-1/2 h-full justify-around items-center">
          <span class="flex flex-col h-full justify-evenly">
            <h2>About me</h2>
            <h3>
              I am a Brazilian Full Stack developer actively pursuing remote job
              opportunities abroad
            </h3>
          </span>
        </div>
        <div class="flex w-1/2 justify-center items-center">
          <img src="/public/apresentation.svg" class="h-full max-h-[50dvh]" />
        </div>
      </section>
    </div>
  </UIContentArea>
</template>

<style scoped>
h1 {
  color: #6c63ff;
  font-size: 450%;
  font-weight: 700;
}
h2 {
  font-size: 300%;
  font-weight: 500;
}
h3 {
  font-size: 200%;
  font-weight: 300;
}
h4 {
  font-size: 200%;
  font-weight: 400;
}
</style>
