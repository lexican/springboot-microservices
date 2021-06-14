import "./App.css";

import Home from "./pages/index";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
