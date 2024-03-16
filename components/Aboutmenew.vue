
<template>
  <div>
    <UIContentArea>
      <section class="itemSpace">
        <div class="itemImage" style="max-width: 60dvh">
          <img src="/myphotoedited.png" alt="" />
        </div>
        <div class="itemText">
          <span class="flex flex-col w-[100%] justify-start h-[100%] gap-3">
            <h2>About me</h2>
            <h4>
              As a <mark>mid-level developer</mark> with a passion for
              technology and innovation,
              <p></p>
              I am driven by the opportunity to
              <mark>work remotely overseas</mark>
              and contribute to impactful projects worldwide.
            </h4>
            <h4>
              With <mark> over 1 year of experience</mark> in
              <mark>Vue</mark> as Frontend and <mark>Node</mark> as Backend , I
              have honed my skills in
              <mark>creating, deploying, and supporting</mark> a wide range of
              applications.
            </h4>
            <h4>
              Whether it's<mark>developing</mark> robust backend systems,
              crafting intuitive user interfaces, or optimizing performance, I
              am adept at tackling complex challenges and delivering
              <mark>high-quality solutions.</mark>
            </h4>
          </span>
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
  font-size: clamp(1dvh, 3vw, 3dvh);
  font-weight: 400;
}

mark {
  @apply bg-[#31bbf7] text-white px-0.5 py-0.5 rounded-sm;
  font-weight: 400;
}

section div {
  @apply flex;
}

.itemSpace {
  @apply flex flex-row flex-wrap  justify-center gap-5;
}

.itemImage {
  @apply flex justify-center;
}

.itemText {
  @apply flex  justify-start w-[50vw] grow;
}


</style>
