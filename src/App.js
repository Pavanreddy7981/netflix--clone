import React from 'react'
import "./App.css"
import Row from './Row'
import requests from "./requests"
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      {/* This is  Nav */}
        <Nav />
      {/* This is  bannner */}
        <Banner />
      
      <Row isLargeRow title="Netflix Orginals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now " fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Top Rated" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    
    </div>
  )
}

export default App
