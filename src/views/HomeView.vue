<template>
  <div class="container home">
    <h1 class="home__title">Фильмы</h1>
    <ul class="home__filter">
      <li>
        <label class="home__check">
          <input
            type="checkbox"
            name="sort"
            class="hidden"
            :checked="moviesStore.sortBy === 'title'"
            @change="moviesStore.toggleSort('title')"
          />
          <CheckboxIconComponent :isActive="moviesStore.sortBy === 'title'" />
          <span class="home__check-text">Отсортировать по названию</span>
        </label>
      </li>
      <li>
        <label class="home__check">
          <input
            type="checkbox"
            name="sort"
            class="hidden"
            :checked="moviesStore.sortBy === 'year'"
            @change="moviesStore.toggleSort('year')"
          />
          <CheckboxIconComponent :isActive="moviesStore.sortBy === 'year'" />
          <span class="home__check-text">Отсортировать по году</span>
        </label>
      </li>
    </ul>
    <div v-if="moviesStore.loading" class="preloader">
      <PreloaderComponent />
    </div>
    <div v-else-if="moviesStore.sortedMovies.length">
      <div class="movies">
        <div v-for="movie in moviesStore.sortedMovies" :key="movie.id">
          <MovieItemComponent :movie="movie" :isLink="true" />
        </div>
      </div>
    </div>
    <div v-else>
      <p>К сожалению, по вашему запросу ничего не найдено...</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useMoviesStore } from '@/stores/moviesStore'
import PreloaderComponent from '@/components/icons/PreloaderComponent.vue'
import MovieItemComponent from '@/components/MovieItemComponent.vue'
import CheckboxIconComponent from '@/components/icons/CheckboxIconComponent.vue'

const moviesStore = useMoviesStore()

onMounted(moviesStore.fetchMovies)
</script>
