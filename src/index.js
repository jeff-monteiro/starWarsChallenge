import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Species from "../src/routes/Species"
import Movies from "../src/routes/Movies"
import Planets from "../src/routes/Planets"
import Characters from "../src/routes/Characters"


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="species" element={<Species />} />
      <Route path="movies" element={<Movies />} />
      <Route path="characters" element={<Characters />} />
      <Route path="planets" element={<Planets />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
