import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Planets() {
   
    const [planets, setPlanets] = useState([]);
    const [removeLoading, setRemoveLoading] = useState (false) 
  
    useEffect(() => {
      async function fetchData() {
        let results = [];
        let data = null;
        for (var i = 1; i < 7; i++) {
          let rep = await fetch(
            `https://swapi.dev/api/planets/?format=json&page=${i}`
          );
          data = await rep.json();
          data.results.map((item) => results.push(item));
        }

        setPlanets(results);
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
          <h1>Loaded Planets</h1>
        </section>
        <section className="cards">
          {planets.map((planets, i) => {
            return (
              <section className="card" key={i}>
                <section className="card-in">
                  <h2>{planets.name}</h2>
                  <br></br>
                  <h3>Climate: {planets.climate}</h3>
                  <h3>Diameter: {planets.diameter}</h3>
                  <h3>Gravity: {planets.gravity}</h3>
                  <h3>Population: {planets.population}</h3>
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


  