<template>
  <CommonImageLoader
    :src="iconUrl"
    :alt="`${symbol} token icon`"
    class="token-image-container"
  >
    <template #placeholder>
      <div class="token-placeholder">
        <svg
          v-if="!iconUrl"
          class="no-icon-placeholder"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="55%"
            dominant-baseline="middle"
            text-anchor="middle"
            style="fill: currentColor; font-size: 50px"
          >
            {{ symbol[0] }}
          </text>
        </svg>
      </div>
    </template>
  </CommonImageLoader>
</template>

<script lang="ts" setup>
defineProps({
  symbol: {
    type: String,
    required: true,
  },
  iconUrl: {
    type: String,
  },
});
</script>

<style lang="scss" scoped>
.token-image-container {
  @apply aspect-square;

  .token-placeholder {
    @apply h-full w-full rounded-full border border-neutral-500 bg-neutral-700;

    .no-icon-placeholder {
      @apply h-full w-full opacity-50;
    }
  }
}
</style>
