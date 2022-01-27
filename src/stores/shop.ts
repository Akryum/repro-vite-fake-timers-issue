import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
// import { $fetch, useFetch } from '@/composable/axios.js'

export interface Shop {
  id: string
  name: string
  rating: number
  ratings: number
  address: string
  picture: string
}

export const useShopStore = defineStore({
  id: 'shops',
  state: () => ({
    loading: false,
    error: null as Error | null,
    shops: [] as Shop[],
  }),
  actions: {
    async fetchShops (search = '') {
      this.loading = true
      this.error = null

      try {
        let url = '/shops?'
        if (search) {
          url += `q=${encodeURIComponent(search)}`
        }
        // const response = await $fetch(url)
        // this.shops = response.data
      } catch (e: any) {
        this.error = e
      } finally {
        this.loading = false
      }
    },
  },
})

// export const useShopStore = defineStore('shops', () => {
//   const search = ref('')

//   const {
//     loading,
//     error,
//     data: shops,
//     fetch: fetchShops,
//   } = useFetch<Shop[]>(computed(() => {
//     let url = '/shops?'
//     if (search.value) {
//       url += `q=${encodeURIComponent(search.value)}`
//     }
//     return url
//   }))

//   return {
//     shops,
//     loading,
//     error,
//     fetchShops,
//     search,
//   }
// })
