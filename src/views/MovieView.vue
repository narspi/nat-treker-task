<template>
  <div class="container movie">
    <div v-if="moviesStore.loading" class="preloader">
      <PreloaderComponent />
    </div>
    <template v-else-if="moviesStore.movie">
      <div class="movie__top">
        <RouterLink to="/" class="movie__back">Назад к списку </RouterLink>
      </div>
      <MovieItemComponent :movie="moviesStore.movie" :isLink="false" />
    </template>
    <template v-else>
      <div class="movie__top">
        <RouterLink to="/" class="movie__back">Назад к списку </RouterLink>
      </div>
      <p class="movie__back-info">К сожалению, по вашему запросу ничего не найдено...</p>
    </template>
  </div>
</template>
<script setup>
import MovieItemComponent from '@/components/MovieItemComponent.vue'
import PreloaderComponent from '@/components/icons/PreloaderComponent.vue'
import { useRoute } from 'vue-router'
import { onBeforeMount, onMounted } from 'vue'
import { useMoviesStore } from '@/stores/moviesStore'

const route = useRoute()
const moviesStore = useMoviesStore()

onBeforeMount(() => {
  moviesStore.getMovieById(route.params.id)
})

onMounted(() => {
  moviesStore.fetchMovieById(route.params.id)
})
</script>
