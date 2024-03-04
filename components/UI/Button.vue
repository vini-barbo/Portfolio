<script lang="ts" setup>

interface IProps {
  text:string
  size?: 'xs'|'sm'|'md'|'lg'
  isRounded?:boolean
  noRounded?: boolean
  color?: 'black'|'red'|'gray'|'white'|'clean'
  disabled?: boolean
  isDisabled?: boolean
}
const props = withDefaults(defineProps<IProps>(), {
  size: 'sm',
  color: undefined
});

</script>

<template>
  <button
    class="bg-green-primary-600 text-white roboto-bold"
    :class="[
      'bg-green-500',
      {
        '!bg-red-500': props.color === 'red',
        '!bg-transparent !text-black': props.color === 'clean',
        '!bg-white !text-black': props.color === 'white',
        '!bg-gray-400 !text-gray-600': props.isDisabled,
        'text-[12px] py-2 px-3 rounded-lg font-normal': props.size === 'xs',
        'text-[14px] py-3 px-4 rounded-lg font-normal': props.size === 'sm',
        'text-[22px] py-3 px-4 rounded-xl font-poppins-bold': props.size === 'md',
        'text-[28px] py-4 px-4 rounded-2xl font-poppins-bold': props.size === 'lg',
        '!rounded-full': props.isRounded,
        '!rounded-none': props.noRounded,
        '!opacity-60': props.disabled && !props.isDisabled,
      }
    ]"
    :disabled="props.disabled"
  >
    <div class="flex justify-between items-center gap-2 relative z-10">
      <div>{{ props.text }}</div>
    </div>
  </button>
</template>