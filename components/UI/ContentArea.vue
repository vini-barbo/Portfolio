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
    class="flex justify-center w-full"
    :style="{ backgroundColor: props.color }"
  >
    <div class="flex justify-center w-[100%] rounded-md p-5 transition-all">
      <slot> </slot>
    </div>
  </section>
</template>
