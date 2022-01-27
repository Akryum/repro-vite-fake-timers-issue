import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Tested from './Tested.vue'
import BaseSearchInput from './BaseSearchInput.vue'
import { useShopStore } from '@/stores/shop'

describe('Tested', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should work', async () => {
    const wrapper = mount(Tested, {
      global: {
        plugins: [createTestingPinia({
          createSpy: () => vi.fn(),
        })],
      },
    })
    const store = useShopStore()
    // const comp = wrapper.getComponent(BaseSearchInput)
    // await comp.get('input').setValue('cat')
    await wrapper.get('input').setValue('cat')
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('cat')
    // vi.runAllTimers()
    // expect(store.fetchShops).toHaveBeenLastCalledWith('cat')
  })
})
