<template>
  <div>
    <UIContentArea color="#f5fcff">
      <section class="itemSpace">
        <div class="itemText">
          <span class="flex flex-col w-[98%] justify-center h-[100%]">
            <h4>Hey, I'm</h4>
            <h2><mark>Vinicius</mark> Barbosa</h2>
            <h2><mark>FullStack</mark> developer</h2>
            <h4>I can make your project becomes <mark>reality</mark></h4>
            <span>
              <UIButton text="Check my resume" />
            </span>
          </span>
        </div>
        <div class="itemImage" style="max-width: 60dvh">
          <img src="/myphotoedited.png" alt="" />
        </div>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Comfortaa&family=Gabarito&family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Madimi+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap");

span {
  width: 100%;
  font-weight: 400;
  font-style: normal;
}

h1 {
  font-size: 250%;
  font-weight: 700;
}
h2 {
  font-size: clamp(2dvh, 8vw, 7dvh);
  font-weight: 600;
}
h3 {
  font-size: 15vw;
  font-weight: 300;
}
h4 {
  font-size: clamp(1dvh, 4vw, 3dvh);
  font-weight: 500;
}

mark {
  @apply bg-transparent text-main-mark2;
}

section div {
  @apply flex  grow;
}

.itemSpace {
  @apply flex flex-wrap  justify-center gap-5 w-[90%];
}

.itemImage {
  @apply flex justify-center;
}

.itemText {
  @apply flex justify-start;
}

img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
