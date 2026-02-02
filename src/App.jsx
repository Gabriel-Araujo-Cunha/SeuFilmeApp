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
      <main>
        <SubTitle>Filmes Populares</SubTitle>
        <Filmes onLoaded={setPopularMovies} />
        <Carrosel items={popularMovies}/>
        <SubTitle>Séries Populares</SubTitle>
        <Serie onLoaded={setPopularSeries} />
        <Carrosel items={popularSeries}/>
      </main>
    </>
  );
};

export default App;
