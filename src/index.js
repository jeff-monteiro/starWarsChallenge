import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Especies from "../src/routes/Especies"
import Filmes from "../src/routes/Filmes"
import Planetas from "../src/routes/Planetas"
import Personagens from "../src/routes/Personagens"


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="especies" element={<Especies />} />
      <Route path="filmes" element={<Filmes />} />
      <Route path="personagens" element={<Personagens />} />
      <Route path="planetas" element={<Planetas />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
