import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Styles.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Planetas() {
   
    const [planeta, setPlaneta] = useState([]);
    const[removeLoading, setRemoveLoading] = useState (false) 
  
    useEffect (() => {
      async function fetchData() {
        
          let results = []
          let data = null
          for (var i = 1; i < 7; i++) {
            let rep = await fetch(`https://swapi.dev/api/planets/?format=json&page=${i}`)
            data = await rep.json()
            data.results.map(item => results.push(item));
        
      }
      
      setPlaneta(results);
      setRemoveLoading(true);
      
    } 

    fetchData ()
  }, []);
   
  return (
    <body>
        <section className="header">
            <section className="image">
                <img src={Logo} alt="Star Wars"/>
            </section>
            
            <section className="navbar">
                <section className="link">
                    <Link to="/" >Home</Link>
                </section>
                <section className="link">
                    <Link to="/filmes">Filmes</Link>
                </section>
                <section className="link">
                    <Link to="/personagens">Personagens</Link>
                </section>
                <section className="link">
                    <Link to="/planetas">Planetas</Link> 
                </section>
                <section className="link">
                    <Link to="/especies">Especies</Link> 
                </section>    
            </section>
        </section>
        
        <main>
            <section className="intro">
                <h1>Lista de Planetas</h1>
            </section>
            <section className="cards">
                {planeta.map((planeta, i) => {
                    return (
                        <section className="card" key={i}>
                            <section className="card-in"> 
                              <h2>{planeta.name}</h2>
                              <br></br>
                              <h3>Clima: {planeta.climate}</h3>
                              <h3>Diametro: {planeta.diameter}</h3>
                              <h3>Gravidade: {planeta.gravity}</h3>
                              <h3>População: {planeta.population}</h3>
                            </section>      
                        </section>
                    )
                })}
                { !removeLoading && <Loading />}
            </section>
        </main>
    </body>
  );
}


  