<template>
  <UIContentArea>
    <div class="w-full flex flex-col justify-start">
      <span> Skills </span>

      <div class="flex w-full justify-between flex-wrap">
        <div v-for="item in 8" class="h-32 aspect-square bg-red-400">
          {{ item }}
        </div>
      </div>
    </div>
  </UIContentArea>
</template>
