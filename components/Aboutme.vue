<script setup lang="ts">
const { locale } = useI18n()
const yearsOfExperience = ref(Math.abs(new Date().getFullYear() - 2022));

</script>

<template>
  <div>
    <UIContentArea color="blue" class="flex flex-col gap-12 ">

      <section class="grid gap-1 md:gap-8 md:grid-cols-1">
        <span class="flex flex-col w-[100%] md:w-[50%] md:text-justify 2xl:w-[70%] justify-start  gap-3">
          <h2 class="subtitle md:ml-1">{{ $t('aboutAbout') }}</h2>
          <h1 class="title md:my-5 2xl:my-8">{{ $t('aboutAboutMe') }}</h1>
          <p v-if="String(locale) == 'en'" class="regularText 2xl:w-[90%]">

            I am a <mark>mid-level full-stack developer</mark> based <mark> in Brazil.</mark>
          <p></p>
          I also have <mark>experience
            with
            teaching.</mark> As a result I have the <mark>ability</mark> not only to <mark>create</mark> customized and
          consistent
          <mark>software</mark> but
          also to <mark>teach</mark>
          and
          <mark>explain</mark> complex subjects to <mark>clients or coworkers.</mark>
          <br>
          Moreover, I have accumulated <mark> over {{ yearsOfExperience }} year{{ yearsOfExperience > 1 ? 's' : '' }} of
            experience</mark> in the field, having <mark>provided services</mark> to more than <mark>three
            companies,</mark> which has given me solid <mark>knowledge</mark> in <mark>project development.</mark>
          <p></p>
          And I
          am fully
          <mark>available</mark> to
          <mark>work remotely.</mark>
          </p>
          <p v-else-if="String(locale) == 'pt'" class="regularText 2xl:w-[90%]">

            Sou um <mark>desenvolvedor pleno</mark> com experiência em <mark>docência.</mark>
          <p></p>
          Tenho a
          <mark>habilidade</mark> de não apenas <mark>criar softwares</mark> consistentes, mas também para
          <mark>ensinar e explicar</mark>
          topicos complexos para <mark>clientes ou colegas de trabalho.</mark>
          <p></p>
          Além disso, tenho <mark>mais de {{ yearsOfExperience }} ano{{ yearsOfExperience > 1 ? 's' : '' }} de
            experiência</mark> na área, com <mark>serviços prestados</mark> para mais de <mark>três
            empresas,</mark> o que me proporcionou sólido <mark>conhecimento</mark> no <mark>desenvolvimento
            de projetos.</mark>
          <p></p>
          Ademais, estou aberto e
          <mark>disponível</mark>
          para <mark>trabalhar remotamente e presencialmente</mark>
          </p>
        </span>

        <Experience id="companies" class="2xl:mt-20">
        </Experience>

      </section>

    </UIContentArea>

  </div>
</template>

