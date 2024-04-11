<template>
  <div>
    <UIContentArea color="blue">
      <section class="grid gap-3 md:grid-cols-2 gap-y-8">
        <div>
          <span class="flex flex-col gap-3 md:gap-9 md:h-full md:justify-center 2xl:gap-14">
            <h2>{{ $t('welcome') }}</h2>
            <h1><mark>Vinicius Barbosa</mark></h1>
            <h1>{{ $t('role') }}</h1>
            <h2>
              {{ $t('headerSubtitle1') }} <mark>{{ $t('headerSubtitle2') }}</mark> {{ $t('headerSubtitle3') }}<mark>&nbsp{{
                $t('headerSubtitle4')
              }}</mark>
            </h2>
            <span>
              <UIButton :text="$t('resume')" />
            </span>
          </span>
        </div>
        <div class="2xl:max-h-[40vw] 2xl:aspect-square md:p-14">
          <img src="/myphotoedited.png" alt="" />
        </div>
      </section>
    </UIContentArea>
  </div>
</template>

<style scoped>
h2 {
  @apply font-semibold text-[18px] md:text-[2.7vw] md:leading-[2.8rem];
}

h1 {
  @apply font-bold text-4xl md:text-[4vw] md:leading-[2.8rem];
}

h1 mark {
  @apply font-bold text-3xl md:text-[4vw] md:leading-[2.8rem];
}

mark {
  @apply bg-transparent text-main-mark2;
}
</style>
