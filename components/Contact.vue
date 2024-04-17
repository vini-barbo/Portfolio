<script setup lang="ts">
const { locale } = useI18n()

const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));

const statusSuccess = locale.value == 'pt' ? 'O email foi copiado com sucesso.' : 'The email has been saved in your Clipboard.';
const statusFailed = locale.value == 'pt' ? 'Falha na hora de copiar email.' : 'Unable to copy the email.';
const copyStatus: Ref<typeof statusSuccess | typeof statusFailed | ""> =
  ref("");

const copyToClipboard = async () => {

  try {
    await navigator.clipboard.writeText("vinicius2508@hotmail.com");
    copyStatus.value = statusSuccess;
  } catch (error) {
    copyStatus.value = statusFailed;
  }
  await sleep(1150);
  copyStatus.value = "";
};
</script>

<template>
  <UIContentArea>
    <section class="w-full flex flex-col gap-4 md:gap-8">
      <h2 class="subtitle text-center md:ml-1 md:text-left md:mb-4">
        {{ $t('projectsGetTouch') }}
      </h2>
      <h1 class="title md:my-5 text-center md:text-left">{{ $t('projectsContactMe') }}</h1>

      <aside class="grid md:grid-cols-2 gap-7 md:gap-20 2xl:max-h-[40vw] md:p-1 ">
        <a href="https://www.linkedin.com/in/vinicius-barbosa-8204604b/" target="_blank" class="imgPlaceholder"
          style="  background-image: url('/linkedin-profile.png'); ">
          <img class="imgPlaceholderIcon" src="/linkedin-icon-2.svg" alt="">
          <img class="imgPlaceholderIcon2" src="/click.gif" alt="">
        </a>

        <a href="https://github.com/vini-barbo" target="_blank" class="imgPlaceholder"
          style="  background-image: url('/git-profile.jpg');">
          <img class="imgPlaceholderIcon" src="/github.svg" alt="">
          <img class="imgPlaceholderIcon2" src="/click.gif" alt="">

        </a>
      </aside>

      <div class="grid md:grid-cols-2 gap-7 md:gap-20 2xl:max-h-[40vw] md:p-1">
        <aside class="card " @click="
          copyToClipboard()
          ">
          <img class="cardImage" src="/email.svg" alt="Linkedin link" />
          <span class="cardText text-[90%]">vinicius2508@hotmail.com</span>
          <img class="cardImage " src="/copy.svg" alt="Linkedin link" />
        </aside>

        <a class="card" href="https://wa.me//5581993531750?text=Vi%20o%20seu%20portfólio%20e%20gostaria%20de%20conversar."
          target="_blank">
          <img class="cardImage" src="/whatsapp.svg" alt="Linkedin link" />
          <span class="cardText">+55 (81) 9 93531750</span>
          <img class="cardImage " src="/link_black.svg" alt="Linkedin link" />
        </a>

      </div>


    </section>
  </UIContentArea>
  <section v-if="copyStatus != ''" style=""
    class="fixed top-5 text-center transition-all animate-pulse-custom text-white w-full h-10">
    <div class="flex items-center justify-center">
      <div class="bg-main-mark2 p-6 z-20 text-white rounded-md">
        {{ copyStatus }}
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes pulse {
  100% {
    opacity: 0;
  }
}

.imgPlaceholder {
  @apply aspect-video w-full block relative rounded-md shadow-lg shadow-gray-700 hover:shadow-2xl hover:scale-105 hover:z-20 transition-all cursor-pointer md:aspect-video;
  background-size: cover;
}

.imgPlaceholderIcon2 {
  @apply h-[60px] w-[60px] right-[-5%] bottom-[-5%] md:right-[-2%] md:bottom-[-2%] md:h-[80px] md:w-[80px];
  position: absolute;
  border-radius: 40px;

}

.imgPlaceholderIcon {
  @apply h-[60px] w-[60px] left-[-5%] bottom-[-5%] md:right-[-2%] md:bottom-[-2%] md:h-[80px] md:w-[80px];
  position: absolute;
  border-radius: 40px;

}

.animate-pulse-custom {
  animation: pulse 2s;
}

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

.card {
  @apply flex justify-between items-center shadow-lg border border-solid border-slate-200 rounded-lg p-2 md:p-4 md:py-7 gap-3 md:flex-row hover:shadow-2xl hover:scale-105 hover:z-20 transition-all cursor-pointer;
}

.cardText {
  @apply md:text-2xl md:w-[100%] md:text-left;
}


.cardImage {
  @apply w-6 aspect-square md:w-[10%];
}
</style>
