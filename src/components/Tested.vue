<script lang="ts" setup>
import { useShopStore } from '@/stores/shop'
// import BaseLoading from './base/BaseLoading.vue'
// import BaseError from './base/BaseError.vue'
// import ShopItem from './ShopItem.vue'
// import BaseSearchInput from './base/BaseSearchInput.vue'
import { ref, watch } from 'vue'
import debounce from 'lodash/debounce'

const shopsStore = useShopStore()
// shopsStore.fetchShops()

const search = ref('')
// const debouncedFetch = debounce(shopsStore.fetchShops, 500)
// watch(search, value => debouncedFetch(value))
watch(search, value => shopsStore.fetchShops(value))
</script>

<template>
  <div class="flex flex-col">
    <div class="my-2">
      <BaseSearchInput
        v-model="search"
        placeholder="Rechercher des salons de coiffure"
        class="toto"
      />
    </div>

    <!-- <div class="relative">
      <BaseLoading
        v-if="shopsStore.loading"
        class="absolute top-12 left-0 w-full"
      >
        Loading...
      </BaseLoading>

      <BaseError v-if="shopsStore.error">
        {{ shopsStore.error.message }}
      </BaseError>

      <div
        :class="{
          'opacity-50': shopsStore.loading,
        }"
      >
        <ShopItem
          v-for="shop in shopsStore.shops"
          :key="shop.id"
          :shop="shop"
          class="my-2"
        />
      </div>
    </div> -->

    {{ search }}
  </div>
</template>
