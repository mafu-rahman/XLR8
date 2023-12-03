import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: "", direction: "asc" });

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(
          // "http://localhost:8081/api/v1/product/all-products"
          "https://axlr8-backend-kyxs.onrender.com/api/v1/product/all-products"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching all products:", error);
    }
  };

  const onSort = (field) => {
    setSortConfig((prevConfig) => ({
      field,
      direction:
        prevConfig.field === field && prevConfig.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  const sortedProducts = React.useMemo(() => {
    if (!sortConfig.field) return products;

    return [...products].sort((a, b) => {
      if (a[sortConfig.field] < b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? -1 : 1;
      }
      if (a[sortConfig.field] > b[sortConfig.field]) {
        return sortConfig.direction === "asc" ? 1 : -1;
      }
      return 0;
    });
  }, [products, sortConfig]);

  return (
    <BrowserRouter>
      <Navbar onSort={onSort} />
      <Routes>
        <Route path="/" element={<Products products={sortedProducts} />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
