<template>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <template v-if="isActive">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15.5002 0.500122H0.500244V15.5001H15.5002V0.500122Z"
        fill="#FF5252"
        fill-opacity="0.98"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.33342 12.1665L2.16675 7.99982L3.34175 6.82482L6.33342 9.80815L12.6584 3.48315L13.8334 4.66649L6.33342 12.1665Z"
        fill="white"
      />
    </template>
    <path
      v-else
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.5 0.5H0.5V15.5H15.5V8V0.5Z"
      stroke="#C4C4C4"
    />
  </svg>
</template>

<script setup>
defineProps({
  isActive: Boolean,
})
</script>
