<script lang="ts" setup>
import { ref } from 'vue'

const search = ref('')
</script>

<template>
  <div class="flex flex-col">
    <div class="my-2">
      <BaseSearchInput
        v-model="search"
        placeholder="Rechercher des salons de coiffure"
        class="toto"
      />
      <!-- This works: -->
      <!-- <input v-model="search" /> -->
    </div>

    {{ search }}
  </div>
</template>
