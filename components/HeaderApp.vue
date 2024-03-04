<template>
  <div>
    <UIContentArea>
      <section
        class="flex flex-row-reverse flex-wrap w-full min-h-[30dvh] justify-center align-middle roboto-medium"
      >
        <div
          class="flex flex-col w-1/2 min-w-[30dvh] aspect-square justify-center items-center gap-5"
        >
          <span>
            <h1>Vinicius Barbosa</h1>
            <h2>FullStack developer</h2>
          </span>
        </div>
        <div class="flex w-1/2 justify-center items-center">
          <div style="border: 4px solid #6c63ff" class="rounded-full">
            <img
              src="/public/myPhoto.png"
              class="h-full max-h-[50dvh] aspect-square rounded-full"
            />
          </div>
        </div>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Gabarito&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Madimi+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap");

.gradient {
  background: rgb(236, 150, 181);
  background: linear-gradient(
    117deg,
    rgba(236, 150, 181, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(191, 228, 236, 1) 100%
  );
  backdrop-filter: blur(20px);
  backdrop-filter: opacity(50%);
}

span {
  width: 100%;
  font-weight: 400;
  font-style: normal;
}

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
