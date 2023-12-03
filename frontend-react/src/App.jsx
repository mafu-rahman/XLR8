import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: "", direction: "asc" });
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const toggleLogin = () => {
    setShowSignup(false);
    setShowLogin(!showLogin);
  };

  const isLoggedIn = () => localStorage.getItem("token") !== null;
  
  const toggleSignup = () => {
    setShowLogin(false);
    setShowSignup(!showSignup);
  };

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
        <Navbar onSort={onSort} toggleLogin={toggleLogin} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              products={sortedProducts}
              onShowLogin={toggleLogin}
              onShowSignup={toggleSignup}
            />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

      {showLogin && (
        <Login
          isOpen={showLogin}
          onClose={toggleLogin}
          showSignup={toggleSignup}
        />
      )}
      {showSignup && (
        <Signup
          isOpen={showSignup}
          onClose={toggleSignup}
          showLogin={toggleLogin}
        />
      )}
    </BrowserRouter>
  );
}

export default App;
