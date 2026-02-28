import './App.css'
import './index.css'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;