import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import LoanCalculator from "./components/LoanCalculator";
import HotDeals from "./components/HotDeals";

function App() {
  const [products, setProducts] = useState([]);
  const [sortConfig, setSortConfig] = useState({ field: "", direction: "asc" });

  useEffect(() => {
    fetchAllProducts();
    addChatbaseScript();    // added for chatbot
  }, []);

  const fetchAllProducts = async () => {
    try {
      const response = await fetch(
        "https://axlr8-backend.onrender.com/api/v1/product/all-products"
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

  /*
  CHAT BOT FUNCTION
  */
  const addChatbaseScript = () => {
    const script = document.createElement("script");
    script.text = `
      window.embeddedChatbotConfig = {
        chatbotId: "tzdNME17KySOhAYg_V2a1",
        domain: "www.chatbase.co"
      };
    `;
    document.head.appendChild(script);

    const chatbaseScript = document.createElement("script");
    chatbaseScript.src = "https://www.chatbase.co/embed.min.js";
    chatbaseScript.chatbotId = "tzdNME17KySOhAYg_V2a1";
    chatbaseScript.domain = "www.chatbase.co";
    chatbaseScript.defer = true;
    document.head.appendChild(chatbaseScript);
  };

  return (
    <>
      <Navbar onSort={onSort} />
      <Products products={sortedProducts}></Products>
      <LoanCalculator></LoanCalculator>
    </>
  );
}

export default App;
