<script lang="ts" setup>
const colorMode = useColorMode()

function toggleTheme() {
  colorMode.value = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    class="inline-flex items-center justify-center rounded-md p-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
    @click="toggleTheme"
  >
    <Icon v-if="colorMode.value === 'dark'" name="heroicons:sun-solid" class="h-5 w-5" />
    <Icon v-else name="heroicons:moon-solid" class="h-5 w-5" />
    <span class="sr-only">切换主题</span>
  </button>
</template>
