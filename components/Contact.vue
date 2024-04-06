<script setup lang="ts">
const sleep = (delay: number) =>
  new Promise((resolve) => setTimeout(resolve, delay));
const statusSuccess = "The content has been saved in your Clipboard";
const statusFailed = "Failed to copy for the Clipboard";
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
        Get in touch
      </h2>
      <h1 class="title md:my-5 text-center md:text-left">View my socials</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 gap-y-5">
        <aside class="flex flex-col gap-8 justify-between md:p-3 !hidden">
          <div class="grid grid-cols-2 gap-5 text-center">
            <div>
              <div>Linkedin</div>
              <div class="h-20 md:h-32">
                <a>
                  <img src="/linkedin-icon-2.svg" alt="Linkedin link" />
                </a>
              </div>
            </div>
            <div>
              <div>Github</div>
              <div class="h-20 md:h-32">
                <a href="">
                  <img src="/github.svg" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div class="md:text-xl">Mail me:</div>
            <div class="flex justify-between">
              <input
                class="border p-3 px-5 rounded-md md:text-2xl"
                value="vinicius25bsantos@gmail.com"
                style="
                  border-top-right-radius: 0px;
                  border-bottom-right-radius: 0px;
                "
              />
              <div
                class="border-main-mark3 border p-3 rounded-md flex items-center focus:outline-0 md:text-2xl"
                style="
                  border-top-left-radius: 0px;
                  border-bottom-left-radius: 0px;
                "
              >
                <button @click="copyToClipboard">Copy</button>
              </div>
            </div>
          </div>
        </aside>
        <aside class="2xl:max-h-[40vw] 2xl:aspect-square md:p-3">
          <img
            class="rounded-md shadow-lg md:h-[100%] hover:shadow-2xl hover:scale-105 transition-all"
            src="/linkedin-profile.png"
            alt=""
          />
        </aside>
        <aside
          class="flex flex-col 2xl:max-h-[40vw] 2xl:aspect-square md:p-3 justify-between"
        >
          <img
            class="rounded-md shadow-lg md:h-[75%] hover:shadow-2xl hover:scale-105 transition-all"
            src="/git-profile.jpg"
            alt=""
          />

          <!-- <div class="group w-full">
            <UIButton text="Copy my email" :size="'md'" :icon="true" class="group-hover:stroke-main-mark2" >
              <svg class="h-14" fill="#ffff" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 75.294 75.294" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path> 
              </g> 
              </g>
              </svg>
              
            </UIButton>
          </div> -->
        </aside>
        <aside v-for="c in 2" class="card">
          <img
            class="aspect-square h-10"
            src="/linkedin-icon-2.svg"
            alt="Linkedin link"
          />
          <div class="cardText">
            <div>
              <span>Email</span>
              <span>vinicius2508@hotmail.com</span>
            </div>
            <span>Clique para copiar -></span>
          </div>
        </aside>
      </div>
    </section>
  </UIContentArea>
  <section
    v-if="copyStatus != ''"
    style=""
    class="fixed top-5 text-center transition-all animate-pulse-custom text-white w-full h-10"
  >
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
  @apply flex flex-col justify-center items-center shadow-lg border border-solid border-slate-200 rounded-lg p-4 py-7 gap-3;
}

.cardText {
  @apply flex flex-col text-center gap-2;
}

.cardText div{
  @apply flex flex-col ;
}
</style>
