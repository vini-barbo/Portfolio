<script setup lang="ts">
const yearsOfExperience = ref(Math.abs(new Date().getFullYear() - 2023));
</script>

<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8">
      <h2 class="subtitle">My skills</h2>
      <h1 class="title">Expertise</h1>
      <aside class="grid md:grid-cols-4 gap-6">
        <div class="card">
          <div class="cardImage">
            <img src="/bachelor.svg" alt="" />
          </div>
          <div class="cardText">
            <h3>Experience as a Teacher</h3>
            <h4>
              I bring valuable teaching experience to the table, enabling me to
              explain complex technical concepts clearly and supportively to
              diverse audiences.
            </h4>
          </div>
        </div>
        <div class="card">
          <div class="cardImage">
            <img src="/open-mind.svg" alt="" />
          </div>
          <div class="cardText">
            <h3>Open to learn new subjects</h3>
            <h4>
              I am always eager to learn new technologies. With no limitations
              in my tech stack, I can adapt to any environment.
            </h4>
          </div>
        </div>
        <div class="card">
          <div class="cardImage">
            <img src="/handshake.svg" alt="" />
          </div>
          <div class="cardText">
            <h3>Strong Teamwork Mindset</h3>
            <h4>
              A strong teamwork mindset is vital. It means valuing each team member, communicating openly, and prioritizing a healthy environment
            </h4>
          </div>
        </div>
        <div class="card">
          <div class="cardImage">
            <img src="/workfromhome.svg" alt="" />
          </div>
          <div class="cardText">
            <h3>Flexibility to remote work</h3>
            <h4>
              Flexibility in remote work is crucial. It means adapting to new environments, staying connected, and managing tasks independently.
            </h4>
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

.card {
  @apply flex flex-col gap-2 text-center p-3 rounded-md w-[1fr] md:w-[1fr] bg-main-blue shadow-md;
}

.cardImage {
  @apply flex justify-center items-center h-20 w-fit aspect-square bg-white rounded-md p-4;
}

.cardText {
  @apply flex flex-col gap-2 text-left;
}

h3 {
  @apply font-bold text-xl md:text-[2vw];
}

h4 {
  @apply font-normal;
}
</style>
