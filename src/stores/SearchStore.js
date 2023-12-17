import { defineStore } from 'pinia'
import { useMovieStore } from './MovieStore'
const url = "http://www.omdbapi.com/?i=tt3896198&apikey=c372a2e0&s";

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    loader: false,
    movies: [],
  }),
  actions: {
    async getMovies(search) {
      this.loader = true
      const res = await fetch(`${url}${search}`)
      const data = await res.json();
      this.movies = data.results;
      this.loader = false; 
    },
    addToUseMovies(object) {
      const movieStore = useMovieStore();
      movieStore.movies.push({ ...object, isWatched: false });
      movieStore.activeTab = 1;
    }
  }
})