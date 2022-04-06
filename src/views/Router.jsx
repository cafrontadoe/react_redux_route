import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Civilization from "./Civilization";
import Nosotros from "./Nosotros";
import Pokemones from "./Pokemones";
import PrincipalStructureUser from "./PrincipalStructureUser";

const RouterApp = () => {
  return (
    <Router>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/usuarios">Usuarios</Link>
        <NavLink to="/nosotros">nosotros</NavLink>
        <NavLink to="/pokemones">Pokemones Redux</NavLink>
      </div>
      <hr></hr>
      <Routes>
        <Route path="/nosotros/:id" element={<Civilization />}></Route>
        <Route path="/usuarios" element={<PrincipalStructureUser />}></Route>
        <Route path="/nosotros" element={<Nosotros />}></Route>
        <Route path="/pokemones" element={<Pokemones />}></Route>
        <Route path="/" element={<h1>Inicio</h1>}></Route>
        <Route path="*" element={<h>No Found</h>} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
