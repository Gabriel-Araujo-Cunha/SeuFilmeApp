import React from 'react'
import { Header } from './components/Header'
import { SubTitle } from './components/SubTitle'
import { Filmes } from './components/Filmes'
import { Serie } from './components/Series'

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
  )
}

export default App