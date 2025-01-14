import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Formation } from "./components/Formation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        {/* Route principale */}
        <Route
          path="/Home"
          element={
            <>
              <Home />
              <Skills />
              <Projects />
              <Footer />
            </>
          }
        />

        {/* Route vers la page Formation */}
        <Route
          path="/Formation"
          element={
            <>
              <Formation />
              <Options />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
