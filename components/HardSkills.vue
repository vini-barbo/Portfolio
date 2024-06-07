<template>
  <UIContentArea :padding="'less'">
    <section class="w-full flex flex-col gap-4 md:gap-8 md:my-5">
      <h2 class="subtitle text-center md:ml-1 md:text-left md:mb-4">
        {{ $t('projectsGetTouch') }}
      </h2>
      <h1 class="title">{{ $t('hardSkillsTechStack') }}</h1>
      <aside class="grid grid-cols-1 md:grid-cols-2 gap-3 2xl:gap-10">


        <div class="card">
          <h4>{{ $t('ai') }}</h4>
          <div class="cardGrid grid-cols-2 md:grid-cols-4">

            <div class="imagePlace">
              <div class="cardImage">
                <img class="rounded-md" src="/python.svg" alt="python logo" />
              </div>
              <p>Python</p>
            </div>
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/jupyter.svg" alt="jupyterlogo" />
              </div>
              <p>Jupyter</p>
            </div>
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/pandas.svg" alt="jupyterlogo" />
              </div>
              <p>Pandas</p>
            </div>
            <div class="imagePlace ">
              <div class="cardImage">
                <img src="/numpy.svg" alt="jupyterlogo" />
              </div>
              <p>NumPy</p>
            </div>

          </div>
        </div>



        <div class="card">
          <h4>Frontend</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/vue.svg" alt="Vue logo" />
              </div>
              <p>Vue</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img src="/tailwind.svg" alt="Tailwind logo" />
              </div>
              <p>Tailwind</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Database</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/postgresql.svg" alt="postgres logo" />
              </div>
              <p>PostgresSql</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img src="/prisma.svg" alt="prismaORM logo" />
              </div>
              <p>PrismaORM</p>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>{{ $t('hardSkillsInfra') }}</h4>
          <div class="cardGrid grid-cols-2">
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/aws.svg" alt="postgres logo" />
              </div>
              <p>AWS</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img src="/docker.svg" alt="prismaORM logo" />
              </div>
              <p>Docker</p>
            </div>
          </div>
        </div>

        <div class="card md:col-span-2">
          <h4>Backend</h4>
          <div class="cardGrid grid-cols-2 md:grid-cols-4">

            <div class="imagePlace">
              <div class="cardImage">
                <img class="rounded-md" src="/java.svg" alt="Java logo" />
              </div>
              <p>Java</p>
            </div>
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/spring.svg" alt="Springboot logo" />
              </div>
              <p>Spring</p>
            </div>

            <div class="imagePlace">
              <div class="cardImage">
                <img class="rounded-md" src="/typescript.svg" alt="TypeScript logo" />
              </div>
              <p>TypeScript</p>
            </div>
            <div class="imagePlace">
              <div class="cardImage">
                <img src="/nodejs.svg" alt="Node logo" />
              </div>
              <p>NodeJs</p>
            </div>
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

.cardGrid {
  @apply grid gap-9 text-center md:gap-10 2xl:gap-16;
}

.card {
  @apply flex flex-col items-center gap-7 p-3 rounded-md border md:gap-10 border-main-mark3;
}

.imagePlace {
  @apply flex flex-col justify-center align-middle gap-2 text-center;
}

.cardImage {
  @apply h-20 md:h-24 2xl:h-36 aspect-square flex justify-center items-center;
}

h4 {
  @apply font-bold text-2xl md:text-[2vw];
}

p {
  @apply font-normal;
}
</style>
