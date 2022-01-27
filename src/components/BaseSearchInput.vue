<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  inheritAttrs: false,
})
</script>

<script lang="ts" setup>
defineProps({
  modelValue: {
    type: String,
    required: true,
  },
})

defineEmits([
  'update:modelValue',
])

const focused = ref(false)

const input = ref<HTMLInputElement | null>(null)
function onRootClick () {
  input.value?.focus()
}
</script>

<template>
  <div
    class="flex items-center space-x-2 p-2 border border-gray-100 rounded-xl focus-within:border-purple-500"
    :class="$attrs.class"
    :style="($attrs.style as any)"
    @click="onRootClick()"
  >
    <IBxBxSearch
      class="w-6 h-6"
      :class="[
        focused ? 'text-purple-500': 'text-gray-500',
      ]"
    />
    <input
      ref="input"
      v-bind="{ ...$attrs, class: undefined, style: undefined }"
      :value="modelValue"
      class="w-full h-full outline-none"
      @input="$emit('update:modelValue', ($event.currentTarget as HTMLInputElement).value)"
      @focus="focused = true"
      @blur="focused = false"
    >
  </div>
</template>
