import "./carrosel-style.css";
import { useRef } from "react";

export function Carrosel({ title, items = [] }) {
  const trackRef = useRef();

  const scrollLeft = () => {
    trackRef.current.scrollBy({
      left: -500,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    trackRef.current.scrollBy({
      left: 500,
      behavior: "smooth",
    });
  };

  if (!items.length) {
    return (
      <section className="carrossel">
        <h2 className="carrossel__title">{title}</h2>
        <p style={{ color: "white" }}>Carregando...</p>
      </section>
    );
  }

  return (
    <section className="carrossel">
      <h2 className="carrossel__title">{title}</h2>

      <button className="carrossel__btn left" onClick={scrollLeft}>
        ‹
      </button>

      <button className="carrossel__btn right" onClick={scrollRight}>
        ›
      </button>

      <div className="carrossel__track" ref={trackRef}>
        {items.map((item) => (
          <article className="carrossel__card" key={item.id}>

            <span className="carrossel__rating">
              ⭐ {item.vote_average.toFixed(1)}
            </span>

            <img
              className="carrossel__img"
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.title || item.name}
              loading="lazy"
            />
          </article>
        ))}
      </div>
    </section>
  );
}
