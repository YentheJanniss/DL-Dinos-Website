import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Classifier from "./components/Classifier";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classifier" element={<Classifier />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
