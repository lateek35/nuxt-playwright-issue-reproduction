import { expect, test } from '@nuxt/test-utils/playwright'

test('test1', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading').first()).toHaveText(/TESTING/)
})

test('test2', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading').first()).toHaveText(/TESTING/)
})

test('test3', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading').first()).toHaveText(/TESTING/)
})

test('test4', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading').first()).toHaveText(/TESTING/)
})

test('test5', async ({ page, goto }) => {
  await goto('/', { waitUntil: 'hydration' })
  await expect(page.getByRole('heading').first()).toHaveText(/TESTING/)
})