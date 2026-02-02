import { useState } from "react";
import { Header } from "./components/Header";
import { SubTitle } from "./components/SubTitle";
import { Filmes } from "./components/Filmes";
import { Serie } from "./components/Series";
import { Carrosel } from "./components/Carrossel";

const App = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="container">
        <section id="filmes" className="section-block">
          <SubTitle>Filmes Populares</SubTitle>
          <Filmes onLoaded={setPopularMovies} />
          <Carrosel items={popularMovies} />
        </section>

        <section id="series" className="section-block">
          <SubTitle>Séries Populares</SubTitle>
          <Serie onLoaded={setPopularSeries} />
          <Carrosel items={popularSeries} />
        </section>
      </main>
    </>
  );
};

export default App;
