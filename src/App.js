import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { Formation } from "./components/Formation";
import  Options  from "./components/OptionsBTS";
import { ParcoursProfessionnel } from "./components/ParcoursProfessionnel";
import { Stage } from "./components/Stage";
import { ParcoursUniversitaire } from "./components/ParcoursUniversitaire";
import { TPbts } from "./components/TPbts";
import { Veilles } from "./components/Veilles";
import { DeveloppementProfessionnel } from "./components/DeveloppementProfessionnel";
import { Certification } from "./components/Certification";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <main style={{ flex: "1 0 auto" }}>
          <Routes>
            {/* Route principale */}
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Skills />
                  <Projects />
                </>
              }
            />

            {/* Route Home */}
            <Route
              path="/home"
              element={
                <>
                  <Home />
                  <Skills />
                  <Projects />
                </>
              }
            />

            {/* Route Formation */}
            <Route
              path="/formation"
              element={
                <>
                  <Formation />
                  <Options />
                </>
              }
            />

            {/* Route Parcours Professionnel */}
            <Route
              path="/parcours-professionnel"
              element={
                <>
                  <ParcoursProfessionnel />
                  <Stage />
                </>
              }
            />

            {/* Route Parcours Universitaire */}
            <Route
              path="/parcours-universitaire"
              element={
                <>
                  <ParcoursUniversitaire />
                  <TPbts />
                  <Veilles />
                </>
              }
            />

            {/* Route Développement professionnel */}
            <Route
              path="/developpement-professionnel"
              element={
                <>
                  <DeveloppementProfessionnel />
                  <Certification />
                </>
              }
            />

            {/* Route par défaut */}
            <Route
              path="*"
              element={
                <>
                  <Home />
                  <Skills />
                  <Projects />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;