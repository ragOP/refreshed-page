import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import VeryNew from "./pages/10";

import Late from "./pages/Late";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ssdengmed" element={<Late />} />
          <Route path="/900engmed" element={<VeryNew />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
