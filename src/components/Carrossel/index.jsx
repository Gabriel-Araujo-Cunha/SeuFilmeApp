import { useRef } from "react";
import "./carrosel-style.css";

export function Carrosel({ title, movies }) {
  const carroselRef = useRef(null);

  const scrollLeft = () => {
    carroselRef.current.scrollBy({
      left: -600,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    carroselRef.current.scrollBy({
      left: 600,
      behavior: "smooth",
    });
  };

  return (
    <section className="carrosel-section">
      <div className="carrosel-header">
        <h2>{title}</h2>
        <span className="see-all">Ver todos</span>
      </div>

      <div className="carrosel-wrapper">
        <button onClick={scrollLeft} className="nav-btn left">
          ‹
        </button>

        <div className="carrosel" ref={carroselRef}>
          {movies.map((movie) => (
            <img
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>

        <button onClick={scrollRight} className="nav-btn right">
          ›
        </button>
      </div>
    </section>
  );
}
