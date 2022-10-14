import { Link } from "react-router-dom";
import '../src/routes/Geral.css';
import Logo from '../src/assets/logo.png'
import vader from '../src/assets/vader.jpg'

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
          <img src={vader} alt='Vader'/>
          <h2>May the Force be with you!</h2>
        </section>
      </main>

    </body> 
  );
}
