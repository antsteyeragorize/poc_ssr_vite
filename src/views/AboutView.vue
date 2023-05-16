<script setup lang="ts">
import { ref } from 'vue'
import { useHead } from '@vueuse/head'

const test = ref('test')

useHead({
  title: 'About',
  meta: [
    {
      name: 'description',
      content: () => `This is about page ${test.value}`,
    },
  ],
})
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
