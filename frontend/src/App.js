import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import Products from "./components/Product/Products";
import About from "./components/About";
import ProductDetail from "./components/Product/ProductDetails";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          {/* this is must these are all syntax */}
          <Route path="/" element={<Home />} exact />
          <Route path="/add" element={<AddProduct />} exact />
          {/* exact helps to batch exact route ('/') and path */}
          <Route path="/products" element={<Products />} exact />
          <Route path="/about" element={<About />} exact />
          {/* <Route path="/products/:id" element={<ProductDetail />} exact /> */}
          <Route path="/products/:id" element={<ProductDetail />} exact />

          {/* products/:id means it take product URL and then update. this ProductDetails component will fetch the data from the id */}
        </Routes>
      </main>
    </>
  );
}

export default App;
