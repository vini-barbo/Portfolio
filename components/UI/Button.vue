<script lang="ts" setup>
interface IProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg";
  isRounded?: boolean;
  noRounded?: boolean;
  color?: "black" | "red" | "gray" | "white" | "clean";
  disabled?: boolean;
  isDisabled?: boolean;
  icon?: boolean;
}
const props = withDefaults(defineProps<IProps>(), {
  size: "sm",
  color: undefined,
  icon: false,
});
</script>

<template>
  <button
    class="bg-green-primary-600 text-main-fontBlack roboto-bold border border-transparent"
    :class="[
      ' text-white bg-main-mark2 hover:bg-white hover:border-solid hover:border hover:border-[#5e3bee] hover:text-[#5e3bee] transition-all',
      {
        '!bg-transparent !text-black !border-transparent':
          props.color === 'clean',
        '!bg-white !text-black': props.color === 'white',
        '!bg-gray-400 !text-gray-600': props.isDisabled,
        'text-[12px] py-2 px-3 rounded-lg font-normal': props.size === 'xs',
        'text-[16px] py-3 px-4 rounded-lg font-normal': props.size === 'sm',
        'text-[22px] py-3 px-4 rounded-xl font-poppins-bold md:text-xl 2xl:text-2xl 2xl:px-8 2xl:py-5':
          props.size === 'md',
        'text-[28px] py-4 px-4 rounded-2xl font-poppins-bold':
          props.size === 'lg',
        '!rounded-full': props.isRounded,
        '!rounded-none': props.noRounded,
        '!opacity-60': props.disabled && !props.isDisabled,
      },
    ]"
    :disabled="props.disabled"
  >
    <div class="flex justify-between items-center gap-2 relative z-10">
      <div>{{ props.text }}</div>
      <div
        v-if="props.icon"
        class="flex justify-center items-center  border-none"
        :class="[
          {
            'h-[12px]   ': props.size === 'xs',
            'h-[16px]   ': props.size === 'sm',
            'h-[22px]   md:h-xl 2xl:h-2xl 2xl:px-8 2xl:py-5':
              props.size === 'md',
            'h-[28px]   ': props.size === 'lg',
          },
        ]"
      >
        <slot></slot>
      </div>
    </div>
  </button>
</template>
