// creating routing through the application
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the index page */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
