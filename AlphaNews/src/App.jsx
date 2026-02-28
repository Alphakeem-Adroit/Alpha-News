import './App.css'
import './index.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import Favorites from './pages/Favorites';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;