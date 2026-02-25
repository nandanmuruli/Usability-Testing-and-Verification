import { Route, Routes, NavLink } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home.jsx";
import About from "./components/About/about.jsx";

const App = () => {
  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">The Clothing Company</h1>
        <NavLink data-testid="Home_Link" to="/">
          Home
        </NavLink>
        <NavLink data-testid="About_Link" to="/about">
          About
        </NavLink>
        <NavLink data-testid="Product_Link" to="/products">
          Products
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
