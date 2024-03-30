import { fileURLToPath } from 'node:url'
import { defineConfig, devices } from '@playwright/test'
import type { ConfigOptions } from '@nuxt/test-utils/playwright'

const devicesToTest = [
  'Desktop Chrome',
  // Test against other common browser engines.
  // 'Desktop Firefox',
  // 'Desktop Safari',
  // Test against mobile viewports.
  // 'Pixel 5',
  // 'iPhone 12',
  // Test against branded browsers.
  // { ...devices['Desktop Edge'], channel: 'msedge' },
  // { ...devices['Desktop Chrome'], channel: 'chrome' },
] satisfies Array<string | typeof devices[string]> 

/* See https://playwright.dev/docs/test-configuration.*/
export default defineConfig<ConfigOptions>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 1,
  /* Opt out of parallel tests on CI. */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  timeout: 999999999,
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    /* Nuxt configuration options */
    nuxt: {
      rootDir: fileURLToPath(new URL('.', import.meta.url))
    }
  },
  projects: devicesToTest.map(p => typeof p === 'string' ? ({ name: p, use: devices[p] }) : p),
})