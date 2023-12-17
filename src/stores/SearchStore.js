import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useMovieStore } from './MovieStore'
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c372a2e0&s";

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false)
  const movies = ref([])

  const getMovies = async(search) => {
    loader.value = true
    const res = await fetch(`${url}${search}`);
    const data = await res.json();
    movies.value = data.results;
    loader.value = false
  }

  const addToUseMovies = (object) => {
    const movieStore = useMovieStore();
    movieStore.movies.push({ ...object, isWatched: false });
    movieStore.activeTab = 1;
  }

  return {
    loader, movies, getMovies, addToUseMovies
  }
})