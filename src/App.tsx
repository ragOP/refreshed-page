import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import VeryNew from "./pages/10";

import Late from "./pages/Late";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Ww from "./pages/ww"
import VeryNew1 from "./pages/11111"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/ssdengmed" element={<Late />} />
          <Route path="/900engmed" element={<VeryNew />} />
          <Route path="/" element={<VeryNew1 />} />
          <Route path="/engmed900" element={<Ww />} />
          <Route path="/terms-and-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
