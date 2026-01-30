import axios from "axios";
import { useEffect, useState } from "react";

export function Serie() {
  // Estado responsável por armazenar os séries retornados pela API
  // Começa como array vazio porque ainda não fizemos a requisição
  const [series, setSeries] = useState([]);

  useEffect(() => {
    // Função assíncrona responsável por buscar os séries na API do TheMovieDB
    async function buscarSeries() {
      // Chave de autenticação da API (TheMovieDB)
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;

      try {
        // Faz a requisição HTTP para buscar os séries mais populares
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc`,
        );

        // Atualiza o estado com a lista de séries retornada pela API
        // Isso dispara uma nova renderização do componente
        setSeries(response.data.results);
      } catch (error) {
        // Caso a requisição falhe, o erro será exibido no console
        console.error("Erro ao buscar séries:", error);
      }
    }

    // Executa a função assim que o componente é montado na tela
    buscarSeries();

    // Array de dependências vazio = roda apenas uma vez (componentDidMount)
  }, []);

  return (
    <div className="slider">
      {series.map((serie) => (
        <img
          key={serie.id} // Chave única usada pelo React para controle da lista
          className="slider-img"
          src={`https://image.tmdb.org/t/p/w300/${serie.poster_path}`} // URL da imagem da série
          alt={serie.name} // Texto alternativo (acessibilidade)
        />
      ))}
    </div>
  );
}
