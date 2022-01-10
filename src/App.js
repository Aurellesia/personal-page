import Portfolio from "components/Portfolio";
import ProjectOne from "components/ProjectOne";
import ProjectTwo from "components/ProjectTwo";
import PersonalWeb from "pages/PersonalWeb";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PersonalWeb />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/project-one" element={<ProjectOne />} />
          <Route path="/project-two" element={<ProjectTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
