import { Link } from "react-router-dom";
import '../src/styles/Styles.css';
import Logo from '../src/assets/logo.png'
import darthVader from '../src/assets/darthVader.jpg'

export default function App() {
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
          <img src={darthVader} alt='darthVader'/>
          <h2>May the Force be with you!</h2>
        </section>
      </main>

    </body> 
  );
}
