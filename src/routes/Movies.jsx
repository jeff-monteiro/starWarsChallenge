import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Movies() {

    const [movies, setMovies] = useState([]); 
    const [removeLoading, setRemoveLoading] = useState (false)

    useEffect(() => {
      async function fetchData() {
        let results = [];
        let data = null;
        for (var i = 1; i < 2; i++) {
          let rep = await fetch(
            `https://swapi.dev/api/films/?format=json&page=${i}`
          );
          data = await rep.json();
          data.results.map((item) => results.push(item));
        }

        setMovies(results);
        setRemoveLoading(true);
      }

      fetchData();
    }, []);

    return (
      <body>
        <section className="header">
          <section className="image">
            <img src={Logo} alt="Star Wars" />
          </section>

          <section className="navbar">
            <section className="link">
              <Link to="/">Home</Link>
            </section>
            <section className="link">
              <Link to="/movies">Movies</Link>
            </section>
            <section className="link">
              <Link to="/characters">Characters</Link>
            </section>
            <section className="link">
              <Link to="/planets">Planets</Link>
            </section>
            <section className="link">
              <Link to="/species">Species</Link>
            </section>
          </section>
        </section>

        <main>
          <section className="intro">
            <h1>Loaded Movies</h1>
          </section>
          <section className="cards">
            {movies.map((movies, i) => {
              return (
                <section className="card" key={i}>
                  <section className="card-in">
                    <h2>{movies.title}</h2>
                    <br></br>
                    <h3>Director: {movies.director}</h3>
                    <h3>Episode: {movies.episode_id}</h3>
                    <h3>Realease-Date: {movies.release_date}</h3>
                  </section>
                </section>
              );
            })}
            {!removeLoading && <Loading />}
          </section>
        </main>
      </body>
    );
  }

  