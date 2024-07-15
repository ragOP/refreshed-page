import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import VeryNew from "./pages/10";

import Late from "./pages/Late";
import Terms from "./pages/Terms";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ssdengmed" element={<Late />} />
          <Route path="/900engmed" element={<VeryNew />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
