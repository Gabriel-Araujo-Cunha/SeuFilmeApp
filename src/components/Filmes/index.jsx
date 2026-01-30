import axios from "axios";
import { useEffect, useState } from "react";

export function Filmes() {
  // Estado responsável por armazenar os filmes retornados pela API
  // Começa como array vazio porque ainda não fizemos a requisição
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    // Função assíncrona responsável por buscar os filmes na API do TheMovieDB
    async function buscarFilmes() {
      // Chave de autenticação da API (TheMovieDB)
      const apiKey = import.meta.env.VITE_TMDB_API_KEY;

      try {
        // Faz a requisição HTTP para buscar os filmes mais populares
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`,
        );

        // Atualiza o estado com a lista de filmes retornada pela API
        // Isso dispara uma nova renderização do componente
        setFilmes(response.data.results);
      } catch (error) {
        // Caso a requisição falhe, o erro será exibido no console
        console.error("Erro ao buscar filmes:", error);
      }
    }

    // Executa a função assim que o componente é montado na tela
    buscarFilmes();

    // Array de dependências vazio = roda apenas uma vez (componentDidMount)
  }, []);

  return (
    <div className="slider">
      {filmes.map((filme) => (
        <img
          key={filme.id} // Chave única usada pelo React para controle da lista
          className="slider-img"
          src={`https://image.tmdb.org/t/p/w300/${filme.poster_path}`} // URL da imagem do filme
          alt={filme.title} // Texto alternativo (acessibilidade)
        />
      ))}
    </div>
  );
}
