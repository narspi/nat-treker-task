<template>
  <svg
    class="preloader__icon"
    :width="size"
    :height="size"
    viewBox="0 0 136 136"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="preloader__spin"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.61919 93.5527C8.61916 93.5527 8.61915 93.5528 8.61916 93.5528C16.6047 114.349 40.1963 124.589 61.2823 116.493C82.3683 108.396 93.0431 84.9977 85.0576 64.2014C85.0576 64.2014 85.0575 64.2014 85.0575 64.2014L82.257 65.2768C82.257 65.2768 82.257 65.2768 82.257 65.2768C89.6318 84.4829 79.7899 106.172 60.2069 113.692C40.6238 121.212 18.7947 111.683 11.4198 92.4774C11.4198 92.4774 11.4197 92.4773 11.4197 92.4774L8.61919 93.5527Z"
      :fill="primaryColor"
      fill-opacity="0.98"
    />
    <path
      class="preloader__spin preloader__spin--faster"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M23.4107 44.3217C22.6232 43.7303 22.4633 42.6077 23.0837 41.8426C39.2531 21.9011 68.6844 18.4111 89.673 34.1727C110.662 49.9342 115.516 79.1714 100.874 100.26C100.312 101.069 99.1895 101.228 98.4019 100.637C97.6143 100.045 97.4599 98.9277 98.0191 98.1169C111.449 78.6456 106.987 51.6349 87.5312 37.0248C68.0758 22.4146 40.8919 25.66 25.9375 43.9867C25.3148 44.7498 24.1983 44.9132 23.4107 44.3217Z"
      :fill="secondaryColor"
    />
  </svg>
</template>

<script setup>
defineProps({
  size: {
    type: [String, Number],
    default: 136,
  },
  primaryColor: {
    type: String,
    default: '#FA2828',
  },
  secondaryColor: {
    type: String,
    default: '#000',
  },
})
</script>
