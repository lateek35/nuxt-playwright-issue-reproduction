<template>
  <UContainer>
    <UHorizontalNavigation :links="links" class="border-b border-gray-200 dark:border-gray-800" />
    <UCard class="mt-10">
      <template #header>
        <div class="flex justify-between">
          <h1>Welcome to Nuxt UI Starter</h1>
          <ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark']" /></ColorScheme>
        </div>
      </template>
      <UButton icon="i-heroicons-book-open" to="https://ui.nuxt.com" target="_blank">Open Nuxt UI Documentation</UButton>
    </UCard>
    <UAccordion
      color="primary"
      variant="soft"
      size="sm"
      :items="[{ label: '1. What is Nuxt UI?', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '2. Getting Started', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '3. Theming', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }, { label: '4. Components', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' }]"
    />
    <UAvatar
    src="https://avatars.githubusercontent.com/u/739984?v=4"
    alt="Avatar"
  />
  <UBadge>Badge</UBadge>
  <UBreadcrumb :links="[{
  label: 'Home',
  icon: 'i-heroicons-home',
  to: '/'
}, {
  label: 'Navigation',
  icon: 'i-heroicons-square-3-stack-3d'
}, {
  label: 'Breadcrumb',
  icon: 'i-heroicons-link'
}]" />
<UButton>Button</UButton>
<UCarousel v-slot="{ item }" :items="[
  'https://picsum.photos/600/800?random=1',
  'https://picsum.photos/600/800?random=2',
  'https://picsum.photos/600/800?random=3',
  'https://picsum.photos/600/800?random=4',
  'https://picsum.photos/600/800?random=5',
  'https://picsum.photos/600/800?random=6'
]">
    <img :src="item" width="300" height="400" draggable="false">


    <UChip>
    <UButton icon="i-heroicons-inbox" color="gray" />
  </UChip>


  
  </UCarousel>

  <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
    <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
  </UDropdown>

  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UButton type="submit">
      Submit
    </UButton>
  </UForm>

  <UInputMenu v-model="selected" :options="people" />

  <UPopover>
    <UButton color="white" label="Open" trailing-icon="i-heroicons-chevron-down-20-solid" />

    <template #panel>
      <div class="p-4">
        <Placeholder class="h-20 w-48" />
      </div>
    </template>
  </UPopover>

  <UProgress :value="70" />

  <UAsideLinks :links="[{
  label: 'Documentation',
  icon: 'i-heroicons-book-open-solid',
  to: '/getting-started'
}, {
  label: 'Playground',
  icon: 'i-simple-icons-stackblitz',
  to: '/playground'
}, {
  label: 'Roadmap',
  icon: 'i-heroicons-beaker',
  to: '/roadmap'
}, {
  label: 'Pro',
  icon: 'i-heroicons-square-3-stack-3d',
  to: '/pro'
}, {
  label: 'Releases',
  icon: 'i-heroicons-rocket-launch',
  to: 'https://github.com/nuxt/ui/releases',
  target: '_blank'
}]" />

<UBlogList orientation="horizontal">
    <UBlogPost
      title="Nuxt 3.9"
      description="Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive..."
    />
    <UBlogPost
      title="Nuxt DevTools 1.0"
      description="Nuxt DevTools v1.0 is out, generally available to all Nuxt projects!"
    />
    <UBlogPost
      title="Nuxt 3.8"
      description="Nuxt 3.8 is out, bringing built-in DevTools, automatic Nuxt Image install, a new app..."
    />
  </UBlogList>

  <UBlogPost
    title="Nuxt 3.9"
    description="Nuxt 3.9 is out - a Christmas gift from the Nuxt team bringing Vite 5, interactive server components, new composables, a new loading API and more."
    date="Dec 25, 2023"
    orientation="vertical"
    :image="{ src: 'https://picsum.photos/640/360', alt: 'Nuxt 3.9' }"
    :authors="[{ name: 'Daniel Roe', avatar: { src: 'https://github.com/danielroe.png', target: '_blank' }, to: 'https://twitter.com/danielcroe' }]"
    :badge="{ label: 'Release' }"
  />

  <UColorModeImage :light="'https://source.unsplash.com/random/200x200?sky'" :dark="'https://source.unsplash.com/random/200x200?sky'" />

  <UColorModeToggle />

  <UDashboardCard
    title="Recent sales"
    description="You made 265 sales this month."
    icon="i-heroicons-chart-bar"
  >
    <UProgress />
  </UDashboardCard>


  <UDashboardPanel :width="300" :resizable="{ min: 200, max: 400 }">
    <UDashboardNavbar>
      <template #left>
        <Logo class="w-auto h-5" />
      </template>
    </UDashboardNavbar>

    <UDashboardSidebar>
      <UDashboardSidebarLinks :links="[{
  label: 'Home',
  icon: 'i-heroicons-home'
}, {
  label: 'Inbox',
  icon: 'i-heroicons-inbox',
  badge: '4'
}, {
  label: 'Users',
  icon: 'i-heroicons-user-group'
}, {
  label: 'Settings',
  icon: 'i-heroicons-cog-8-tooth',
  children: [{
    label: 'General'
  }, {
    label: 'Members'
  }, {
    label: 'Notifications'
  }]
}]" />
    </UDashboardSidebar>
  </UDashboardPanel>

  <UDashboardSection
    icon="i-heroicons-user"
    title="Profile"
    description="This information will be displayed publicly."
    orientation="vertical"
    class="px-4 mt-6"
  />

  <UDashboardToolbar class="py-0 px-1.5 overflow-x-auto">
    <UHorizontalNavigation :links="[[{
  label: 'General',
  icon: 'i-heroicons-user-circle'
}, {
  label: 'Members',
  icon: 'i-heroicons-user-group'
}, {
  label: 'Notifications',
  icon: 'i-heroicons-bell'
}], [{
  label: 'Documentation',
  icon: 'i-heroicons-book-open',
  to: 'https://ui.nuxt.com/pro',
  target: '_blank'
}, {
  label: 'Buy now',
  icon: 'i-heroicons-credit-card',
  to: 'https://ui.nuxt.com/pro/pricing',
  target: '_blank'
}]]" />
  </UDashboardToolbar>
  
</UContainer>
</template>


<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }], [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    shortcuts: ['E'],
    click: () => {
      console.log('Edit')
    }
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid',
    shortcuts: ['D'],
    disabled: true
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid',
    shortcuts: ['⌘', 'D']
  }]
]


const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Required')
})

type Schema = InferType<typeof schema>

const state = reactive({
  email: undefined,
  password: undefined
})

async function onSubmit (event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  console.log(event.data)
}

const route = useRoute()

const links = [{
  label: 'Profile',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
  },
  badge: 100
}, {
  label: 'Installation',
  icon: 'i-heroicons-home',
  to: '/getting-started/installation'
}, {
  label: 'Horizontal Navigation',
  icon: 'i-heroicons-chart-bar',
  to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
}, {
  label: 'Command Palette',
  icon: 'i-heroicons-command-line',
  to: '/components/command-palette'
}]

const people = ['Wade Cooper', 'Arlene Mccoy', 'Devon Webb', 'Tom Cook', 'Tanya Fox', 'Hellen Schmidt', 'Caroline Schultz', 'Mason Heaney', 'Claudie Smitham', 'Emil Schaefer']

const selected = ref(people[0])
</script>