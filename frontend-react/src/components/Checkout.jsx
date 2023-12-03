import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [checkoutStatus, setCheckoutStatus] = useState(null);
  const navigate = useNavigate();
  const cartId = localStorage.getItem("cartId");
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (cartId && token) {
      fetch(
        // `http://localhost:8081/api/v1/cart/get-items-info?cartId=${cartId}`,
          `https://axlr8.ca/api/v1/cart/get-items-info?cartId=${cartId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => response.json())
        .then((data) => setCartItems(data))
        .catch((error) => console.error("Error fetching cart data:", error));
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cartId && token) {
      fetch(
        `http://localhost:8081/api/v1/cart/checkout-cart?cartUUID=${cartId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then((response) => {
          if (response.ok) {
            setCheckoutStatus("success");
            setTimeout(() => navigate("/"), 2500);
          } else {
            setCheckoutStatus("failure");
          }
        })
        .catch((error) => {
          console.error("Error placing order:", error);
          setCheckoutStatus("failure");
        });
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <div className="w-3/4 text-center my-8">
        <h1 className="text-3xl font-bold">Checkout</h1>
        <p className="text-lg">Proceed to place your order</p>

        <form onSubmit={handleSubmit} className="flex flex-col items-center">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="w-3/4 flex flex-col md:flex-row justify-between items-center mb-4 border-b pb-4 w-full"
            >
              <img
                src={
                  "https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
                }
                alt={item.name}
                className="h-20 w-30 object-cover"
              />
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>{item.brand}</p>
              </div>
              <div>
                <p>${item.price.toFixed(2)}</p>
                <p>Qty: {item.cartItems[0].quantity}</p>
              </div>
            </div>
          ))}
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Full Name"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="tel"
            placeholder="Phone Number"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Address"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="City"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="State / Province"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Postal / Zip Code"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Country"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Card Number"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="Expiry Date (MM/YY)"
            required
          />
          <input
            className="border rounded p-2 w-full mb-4"
            type="text"
            placeholder="CVC"
            required
          />
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-700 text-white py-2 px-4 rounded"
          >
            Place Order
          </button>
        </form>

        {checkoutStatus === "success" && (
          <div className="mt-4 text-green-600">
            Order placed, redirecting to home page.
          </div>
        )}
        {checkoutStatus === "failure" && (
          <div className="mt-4 text-red-600">
            Sorry, couldn't place order, please try again.
          </div>
        )}
      </div>
    </div>
  );
}
