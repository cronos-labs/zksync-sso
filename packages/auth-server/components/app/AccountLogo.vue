<template>
  <img
    :src="logoImage"
    :style="{ height: height + 'px' }"
    alt="Cronos zkEVM Logo"
  />
</template>

<script setup lang="ts">
const { height = 30, light = false } = defineProps<{ height?: number, light?: boolean }>();
const logoImage: string = light ? '/cronos-zkevm-logo-light.png' : '/cronos-zkevm-logo.png';
</script>

<style scoped>
img {
  object-fit: contain;
}
</style>
