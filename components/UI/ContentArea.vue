<script setup lang="ts">
interface IProps {
  color?: string;
}

const props = withDefaults(defineProps<IProps>(), {
  color: "white",
});
</script>

<template>
  <section
    class="flex justify-center w-full p-5 md:px-11"
    :style="{ backgroundColor: props.color }"
  >
    <slot> </slot>
  </section>
</template>
