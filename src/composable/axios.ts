import axios, { AxiosRequestConfig } from 'axios'
import { isRef, ref, Ref, unref, watch } from 'vue'
import debounce from 'lodash/debounce'

export const $fetch = axios.create({
  baseURL: 'http://localhost:4000',
})

export function useFetch <
  TResult = any,
  TRequestData = any,
> (
  path: string | Ref<string>,
  options: AxiosRequestConfig = { method: 'GET' },
) {
  // Used to handle multiple in-flight requests
  let requestId = 0

  const loading = ref(false)
  const error = ref<Error | null>(null)
  const data: Ref<TResult | null> = ref(null)

  async function fetch (requestData?: TRequestData) {
    const id = ++requestId
    loading.value = true
    error.value = null

    try {
      const response = await $fetch(unref(path), {
        ...options,
        ...requestData
          ? {
              data: requestData,
            }
          : {},
      })
      const result = response.data as TResult
      if (id === requestId) {
        data.value = result
      }
      return result
    } catch (err: any) {
      if (id === requestId) {
        error.value = err
      }
      return null
    } finally {
      if (id === requestId) {
        loading.value = false
      }
    }
  }

  if (isRef(path)) {
    const debouncedFetch = debounce(fetch, 500)
    watch(path, () => debouncedFetch())
  }

  return {
    loading,
    error,
    data,
    fetch,
  }
}
