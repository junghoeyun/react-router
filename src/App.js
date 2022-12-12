import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import Product from "./components/Product";
import About from "./components/About";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />}></Route>
          <Route path="/Product/:id" element={<ProductPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
