<template>
  <img
    src="/cronos-zkevm-logo.png"
    :style="{ height: height + 'px' }"
    alt="Cronos zkEVM Logo"
  />
</template>

<script setup lang="ts">
const { height = 30 } = defineProps<{ height?: number }>();
</script>

<style scoped>
img {
  object-fit: contain;
}
</style>
