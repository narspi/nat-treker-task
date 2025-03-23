import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const useMoviesStore = defineStore('storeMovies', () => {
  const movies = ref([])
  const loading = ref(true)
  const movie = ref(null)
  const sortBy = ref(null)

  const fetchMovies = async () => {
    loading.value = true
    try {
      const { data } = await axios.get(`${API_BASE_URL}/movies`)
      if (data.success) {
        movies.value = data.data
      }
    } catch (error) {
      console.error('Ошибка загрузки фильмов:', error)
    } finally {
      loading.value = false
    }
  }

  const getMovieById = (id) => {
    const existingMovie = movies.value.find((elem) => elem.id === Number(id))
    if (existingMovie) {
      movie.value = existingMovie
    }
  }

  const fetchMovieById = async (id) => {
    if (loading.value === false) return
    loading.value = true
    try {
      const { data } = await axios.get(`${API_BASE_URL}/movie/${id}`)
      if (data.success) {
        movie.value = data.data
      }
    } catch (error) {
      console.error(`Ошибка загрузки фильма с id ${id}:`, error)
    } finally {
      loading.value = false
    }
  }

  const sortedMovies = computed(() => {
    if (sortBy.value === 'title') {
      return [...movies.value].sort((a, b) => a.title.localeCompare(b.title))
    }
    if (sortBy.value === 'year') {
      return [...movies.value].sort((a, b) => a.year - b.year)
    }
    return movies.value
  })

  const toggleSort = (type) => {
    sortBy.value = sortBy.value === type ? null : type
  }

  return { movies, loading, movie, fetchMovies, fetchMovieById, getMovieById, sortedMovies, toggleSort, sortBy }
})
