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
</script>

<template>
  <div>
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.currentTarget.value)"
    >
  </div>
</template>
