import React, { useState } from "react";
import { Header } from "./components/Header";
import { SubTitle } from "./components/SubTitle";
import { Filmes } from "./components/Filmes";
import { Serie } from "./components/Series";
import { Carrosel } from "./components/Carrossel";

const App = () => {

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SubTitle>Filmes</SubTitle>
        <Filmes />
        <SubTitle>Séries</SubTitle>
        <Serie />
      </main>
    </>
  );
};

export default App;
