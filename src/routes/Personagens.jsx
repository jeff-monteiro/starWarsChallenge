import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Personagens() {
    
    const [personagens, setPersonagens] = useState([]);  
    const [removeLoading, setRemoveLoading] = useState (false)
    
    useEffect(() => {
      async function fetchData() {
        let results = [];
        let data = null;
        for (var i = 1; i < 10; i++) {
          let rep = await fetch(
            `https://swapi.dev/api/people/?format=json&page=${i}`
          );
          data = await rep.json();
          data.results.map((item) => results.push(item));
        }

        setPersonagens(results);
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
                <Link to="/filmes">Movies</Link>
              </section>
              <section className="link">
                <Link to="/personagens">Characters</Link>
              </section>
              <section className="link">
                <Link to="/planetas">Planets</Link>
              </section>
              <section className="link">
                <Link to="/especies">Species</Link>
              </section>
            </section>
          </section>

          <main>
            <section className="intro">
              <h1>Loaded Characters</h1>
            </section>
            <section className="cards">
              {personagens.map((personagens, i) => {
                return (
                  <section className="card" key={i}>
                    <section className="card-in">
                      <h2>{personagens.name}</h2>
                      <br></br>
                      <h3>Height: {personagens.height}</h3>
                      <h3>Hair-Color: {personagens.hair_color}</h3>
                      <h3>Weight: {personagens.mass}</h3>
                      <h3>Gender: {personagens.gender}</h3>
                      <h3>{/* {personagens.films} */}</h3>
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

  