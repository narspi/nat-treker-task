<template>
  <component
    :is="isLink ? 'RouterLink' : 'div'"
    :to="isLink ? '/movie/' + movie.id : null"
    :class="isLink ? 'movies__item' : 'movies__item movies__item--no-hover'"
  >
    <div class="movies__item-decor">
      <img :src="movie.poster" :alt="movie.title" class="movies__item-img" loading="lazy" />
    </div>
    <div class="movies__item-content">
      <h2 class="movies__item-title">{{ movie.title }}</h2>
      <p class="movies__item-tags">{{ movie.year }}, {{ movie.genres.join(', ') }}</p>
      <p v-if="movie.directors" class="movies__item-tags">
        Режиссёр: {{ movie.directors.join(', ') }}
      </p>
      <p v-if="movie.actors" class="movies__item-tags">
        Актёры: <span class="movies__item-actors">{{ movie.actors.join(', ') }}</span>
      </p>
      <p v-if="movie.description" class="movies__item-descr">
        {{ movie.description }}
      </p>
      <p v-if="movie?.collapse?.duration" class="movies__item-duration">
        <span>
          {{ movie.collapse.duration[0] }}
        </span>
        <MovieDecorComponent />
      </p>
    </div>
  </component>
</template>

<script setup>
import MovieDecorComponent from './icons/MovieDecorComponent.vue'

defineProps({
  movie: Object,
  isLink: Boolean,
})
</script>
