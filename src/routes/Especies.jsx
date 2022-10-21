import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import '../styles/Styles.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Especies() {
    
    const [especies, setEspecies] = useState([]);
    const [removeLoading, setRemoveLoading] = useState (false)

    useEffect(() => {
      async function fetchData() {
        let results = [];
        let data = null;
        for (var i = 1; i < 5; i++) {
          let rep = await fetch(
            `https://swapi.dev/api/species/?format=json&page=${i}`
          );
          data = await rep.json();
          data.results.map((item) => results.push(item));
        }

        setEspecies(results);
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
            <h1>Loaded Species</h1>
          </section>
          <section className="cards">
            {especies.map((especies, i) => {
              return (
                <section className="card" key={i}>
                  <section className="card-in">
                    <h2>{especies.name}</h2>
                    <br></br>
                    <h3>Average-Height: {especies.average_height}</h3>
                    <h3>Classification: {especies.classification}</h3>
                    <h3>Designation: {especies.designation}</h3>
                    <h3>Skin-Color: {especies.skin_colors}</h3>
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

  