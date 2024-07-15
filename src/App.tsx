import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import VeryNew from "./pages/10";

import Late from "./pages/Late";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ssdengmed" element={<Late />} />
          <Route path="/900engmed" element={<VeryNew />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
