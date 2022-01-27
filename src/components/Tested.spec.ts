import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Tested from './Tested.vue'

describe('Tested', () => {
  beforeEach(() => {
    // This breaks VTU
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  test('should work', async () => {
    const wrapper = mount(Tested)
    await wrapper.get('input').setValue('cat')
    console.log(wrapper.html())
    expect(wrapper.text()).toContain('cat')
  })
})
