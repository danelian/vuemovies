import { defineStore } from 'pinia'
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
      console.log(data)
      this.loader = false;
    }
  }
})