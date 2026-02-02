import axios from "axios";
import { useEffect } from "react";

export function Serie({ onLoaded }) {
  useEffect(() => {
    async function buscarSeries() {
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc`,
        );
        const results = response.data.results;
        if (onLoaded) onLoaded(results);
      } catch (error) {
        console.error("Erro ao buscar séries:", error);
      }
    }
    buscarSeries();
  }, [onLoaded]);

  return null;
}
