import PersonalWeb from "pages/PersonalWeb";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PersonalWeb />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
