<script setup lang="ts">
interface IProps {
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  color: "white",
});
</script>

<template>
  <div
    class="flex justify-center w-full"
    :style="{ backgroundColor: props.color }"
  >
    <div class="flex justify-center w-[100%] rounded-md p-5 transition-all">
      <slot> </slot>
    </div>
  </div>
</template>

<style scoped>
.shadow {
  @apply shadow-lg hover:shadow-2xl;
}
</style>
