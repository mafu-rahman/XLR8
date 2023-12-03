import React, { Fragment, useState, useEffect } from "react";
import ProductCard from "./ProductCard";

const HotDeals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://axlr8-backend-kyxs.onrender.com/api/v1/product/products/hot-deals"
          // "http://localhost:8081/api/v1/product/products/hot-deals"

        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error during GET request:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center mt-4">
      {products.map((product, index) => (
        <div
          key={index}
          className="max-w-sm mx-4 bg-white rounded-md overflow-hidden shadow-md my-4 relative"
        >
          <div className="absolute top-2 right-2">
            <p>{product.deal}</p>
          </div>

          <ProductCard
            key={product.productId} 
            product={product}
          ></ProductCard>
        </div>
      ))}
    </div>
  );
};

export default HotDeals;
