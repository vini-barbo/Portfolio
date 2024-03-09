<script setup lang="ts">
interface IProps {
  isShadowActivate: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  isShadowActivate: true,
});
</script>

<template>
  <div class="flex justify-center w-full">
    <div
      class="flex justify-center w-[100%] rounded-md transition-all bg-white"
    >
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  @apply shadow-lg hover:shadow-2xl;
}
</style>
