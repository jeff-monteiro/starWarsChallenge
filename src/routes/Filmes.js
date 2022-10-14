import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Geral.css';
import Logo from '../assets/logo.png';
import Loading from "./Loading";

export default function Filmes() {

    const [filmes, setFilmes] = useState([]); 
    const[removeLoading, setRemoveLoading] = useState (false)

    useEffect (() => {
        async function fetchData() {
          
            let results = []
            let data = null
            for (var i = 1; i < 2; i++) {
              let rep = await fetch(`https://swapi.dev/api/films/?format=json&page=${i}`)
              data = await rep.json()
              data.results.map(item => results.push(item));
          
        }
        
        setFilmes(results);
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
                    <h1>Lista de Filmes</h1>
                </section>
                <section className="cards">
                {filmes.map((filmes, i) => {
                    return (
                        <section className="card" key={i}>
                            <section className="card-in"> 
                                <h2>{filmes.title}</h2>
                                <br></br>
                                <h3>Diretor: {filmes.director}</h3>
                                <h3>Episode: {filmes.episode_id}</h3>
                                <h3>Lançamento: {filmes.release_date}</h3>
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

  