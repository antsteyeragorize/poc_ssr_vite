<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Home',
  meta: [
    {
      name: 'description',
      content: 'This is home page',
    },
  ],
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
