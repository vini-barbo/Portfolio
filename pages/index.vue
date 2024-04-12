<template>
  <main class="flex flex-col w-full bg-[#f5f5f7]">
    <NavbarApp class="bg-white"></NavbarApp>
    <HeaderApp id="contact"></HeaderApp>
    <Aboutme id="aboutme"></Aboutme>
    <HardSkills id="hardskill"></HardSkills>
    <Projects id="project"></Projects>
    <Contact id="contact"></Contact>
    <FooterApp></FooterApp>
  </main>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

* {
  margin: 0;
  padding: 0;
  font-family: "roboto", sans-serif;
  font-weight: 600;
  font-style: normal;
}

.subtitle {
  @apply font-medium text-xl md:text-[2vw] 2xl:text-[1.8vw] md:leading-[1.3rem] mt-1 md:mb-4 text-main-fontBlack;
}

.title {
  @apply font-bold text-4xl md:text-[3.3vw] 2xl:text-[2.8vw] md:leading-[1rem] mb-4 md:mb-8 text-main-fontBlack;
}

.regularText {
  @apply font-normal text-lg text-main-fontBlack md:text-2xl md:leading-[40px] 2xl:text-4xl 2xl:leading-[55px];
}

.regularText mark {
  @apply text-main-mark3 bg-transparent px-0.5 py-0.5;
}

.roboto-thin {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: normal;
}

.roboto-light {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: normal;
}

.roboto-regular {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

.roboto-medium {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: normal;
}

.roboto-bold {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.roboto-black {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: normal;
}

.roboto-thin-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 100;
  font-style: italic;
}

.roboto-light-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
}

.roboto-regular-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
}

.roboto-medium-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-style: italic;
}

.roboto-bold-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
}

.roboto-black-italic {
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-style: italic;
}

img,
svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
