<template>
  <UIContentArea :color="'blue'">
    <section class="w-full flex flex-col gap-4 md:gap-8">
      <h2 class="subtitle">{{ $t('projectsMyprojects') }}</h2>
      <h1 class="title">{{ $t('projectsMyPortfolio') }}</h1>
      <aside class="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-4 gap-y-5">
        <div class="card">
          <img src="/projectsample.png" alt="" />
          <div class="cardText">
            <div class="card2TextTitle">
              <h3>{{ $t('projectsSpotifyClone') }}</h3>
              <p><mark class="text-yellow-400">{{ $t('projectsInProgress') }}</mark></p>
            </div>
            <div class="cardTechs">
              <div>Node</div>
              <div>React</div>
              <div>Typescript</div>
              <div>Postgres</div>
            </div>
          </div>
          <div class="cardButton">
            <UIButton :text="$t('projectsCheckTheRepo')" @click="navigateTo('https://github.com/vini-barbo/SpotifyCloneServer', {
              external: true,
              open: {
                target: '_blank',
              }
            })"  class="group" :icon="true" size="xs">
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover:stroke-main-mark2"
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#ffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
            <UIButton class="hidden" :text="$t('projectsCheckTheRepo')" :color="'clean'" :icon="true" size="xs">
              <img src="/github_black.svg" alt="" />
            </UIButton>
          </div>
        </div>
        <div class="card">
          <img src="/projectsample.png" alt="" />
          <div class="cardText">
            <div class="card2TextTitle">
              <h3>{{ $t('projectsThisPortfolio') }}</h3>
              <p><mark class="text-yellow-400 invisible">{{ $t('projectsInProgress') }}</mark></p>
            </div>
            <div class="cardTechs">
              <div>Node</div>
              <div>React</div>
              <div>Typescript</div>
              <div>Postgres</div>
            </div>
          </div>
          <div class="cardButton">
            <UIButton :text="$t('projectsCheckTheRepo')" @click="navigateTo('https://github.com/vini-barbo/Portfolio', {
              external: true,
              open: {
                target: '_blank',
              }
            })" class="group" :icon="true" size="xs">
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover:stroke-main-mark2"
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#ffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
            <UIButton class="hidden" :text="$t('projectsCheckTheRepo')" :color="'clean'" :icon="true" size="xs">
              <img src="/github_black.svg" alt="" />
            </UIButton>
          </div>
        </div>
        <div
          class="hidden md:flex md:flex-col md:gap-7 md:p-4 md:shadow-md md:bg-white md:shadow-stone-300 md:rounded-lg hover:shadow-2xl hover:scale-105 hover:z-20 transition-all cursor-pointer">
          <img src="/projectsample.png" alt="" />
          <div class="cardText">
            <div class="card2TextTitle">
              <h3>{{ $t('projectsMoreComing') }}</h3>
              <p><mark class="text-yellow-400">{{ $t('projectsStayTuned') }}</mark></p>
            </div>
            <div class="cardTechs">
              <div>{{ $t('projectsTo') }}</div>
              <div>{{ $t('projectsSee') }}</div>
              <div>{{ $t('projectsThe') }}</div>
              <div>{{ $t('projectsUpdates') }}</div>
            </div>
          </div>
          <div class="cardButton">
            <UIButton :text="$t('projectsCheckTheRepo')" class="group" :icon="true" size="xs" :disabled="true">
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover:stroke-main-mark2"
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#ffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
            <UIButton class="hidden" :text="$t('projectsCheckTheRepo')"  :color="'clean'" :icon="true" size="xs">
              <img src="/github_black.svg" alt="" />
            </UIButton>
          </div>
        </div>
        <div
          class="hidden 2xl:flex 2xl:flex-col 2xl:gap-7 2xl:p-4 2xl:bg-white 2xl:shadow-md 2xl:shadow-stone-300 2xl:rounded-lg hover:shadow-2xl hover:scale-105 hover:z-20 transition-all cursor-pointer">
          <img src="/projectsample.png" alt="" />
          <div class="cardText">
            <div class="card2TextTitle">
              <h3>{{ $t('projectsMoreComing') }}</h3>
              <p><mark class="text-yellow-400">{{ $t('projectsStayTuned') }}</mark></p>
            </div>
            <div class="cardTechs">
              <div>{{ $t('projectsTo') }}</div>
              <div>{{ $t('projectsSee') }}</div>
              <div>{{ $t('projectsThe') }}</div>
              <div>{{ $t('projectsUpdates') }}</div>
            </div>
          </div>
          <div class="cardButton">
            <UIButton :text="$t('projectsCheckTheRepo')" class="group" :icon="true" size="xs" :disabled="true">
              <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="group-hover:stroke-main-mark2"
                  d="M20 4L12 12M20 4V8.5M20 4H15.5M19 12.5V16.8C19 17.9201 19 18.4802 18.782 18.908C18.5903 19.2843 18.2843 19.5903 17.908 19.782C17.4802 20 16.9201 20 15.8 20H7.2C6.0799 20 5.51984 20 5.09202 19.782C4.71569 19.5903 4.40973 19.2843 4.21799 18.908C4 18.4802 4 17.9201 4 16.8V8.2C4 7.0799 4 6.51984 4.21799 6.09202C4.40973 5.71569 4.71569 5.40973 5.09202 5.21799C5.51984 5 6.07989 5 7.2 5H11.5"
                  stroke="#ffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </UIButton>
            <UIButton class="hidden" :text="$t('projectsCheckTheRepo')" :color="'clean'" :icon="true" size="xs">
              <img src="/github_black.svg" alt="" />
            </UIButton>
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

.techSpace {
  @apply flex flex-col gap-1;
}

.cardTextDesc p {
  height: 60px;
}

.cardTechs {
  @apply grid gap-2 grid-cols-4;
}

.cardTechs div {
  @apply flex justify-center items-center bg-main-mark3 px-[1px] py-1 text-white rounded-md w-full text-[10px] md:text-[15px];
}

.card {
  @apply flex flex-col gap-7 p-4 bg-white shadow-md shadow-stone-300 rounded-lg hover:shadow-2xl hover:scale-105 hover:z-20 transition-all cursor-pointer;

}

.cardText {
  @apply flex flex-col gap-2;
}

.cardButton {
  @apply flex gap-2;
}

.cardTextTitle p {
  @apply text-[12px] my-0.5;
}

p {
  @apply text-sm font-normal text-[#5b5b5b] text-justify;
}

mark {
  background-color: white;
}

h3 {
  @apply font-semibold text-2xl 2xl:text-[1.2vw];
}

a {
  @apply text-main-mark2 cursor-pointer;
}
</style>
