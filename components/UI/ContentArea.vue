<script setup lang="ts">
interface IProps {
  color?: "blue" | "white";
  padding?: "less" | "normal";
}

const props = withDefaults(defineProps<IProps>(), {
  color: "white",
  padding: "normal",
});

</script>

<template>
  <section
    class="flex justify-center w-full p-5 md:px-11 "
    :class="{
      'md:py-20': props.padding === 'normal',
      'bg-main-blue': props.color === 'blue',
      'bg-white': props.color === 'white',
    }"
  >
    <slot> </slot>
  </section>
</template>
