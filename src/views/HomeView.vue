<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'

import { useServerHead } from '@vueuse/head'

useServerHead({
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
