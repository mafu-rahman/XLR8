import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Login from "./Login";

const ProductCard = ({ product }) => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const cartId = localStorage.getItem("cartId");
    const productId = product.productId;
    // const addToCartUrl = `http://localhost:8081/api/v1/cart/addItem?cartId=${cartId}&productId=${productId}&quantity=${quantity}`;
    const addToCartUrl = `https://axlr8.ca/api/v1/cart/addItem?cartId=${cartId}&productId=${productId}&quantity=${quantity}`;
    const token = localStorage.getItem("token");

    if (!token) {
      setShowLogin(true);
      return;
    }

    fetch(addToCartUrl, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network error! status: ${response.status}`);
        } else {
          console.log("Added to cart: ", quantity);
          setOpen(false);
        }
      })
      .catch((error) => {
        console.error("Error adding item: ", error);
      });
  };

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + increment;
      return newQuantity < 1 ? 1 : newQuantity;
    });
  };

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  return (
    <div className="shadow-md rounded-lg bg-white p-4">
      <img
        src={
          "https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
        }
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-lg"
        onClick={() => setOpen(true)}
      />
      <div className="mt-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p>{product.price}</p>
        <p>{product.modelYear}</p>
        <p>{product.brand}</p>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="z-10 relative"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:scale-95 sm:translate-y-0"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:scale-95 sm:translate-y-0"
              >
                <Dialog.Panel className="relative overflow-hidden transform rounded-lg bg-white text-left shadow-xl transition-all sm:w-full sm:max-w-lg sm:my-8">
                  <div className="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <button
                        onClick={() => setOpen(false)}
                        className="absolute right-4 top-4 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      >
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                      <div className="w-full mt-3 text-center sm:mt-0 sm:text-left">
                        <Dialog.Title
                          as="h3"
                          className="text-lg font-medium leading-6 text-black"
                        >
                          {product.name}
                        </Dialog.Title>
                        <div className="mt-2">
                          <img
                            src={
                              "https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
                            }
                            alt={product.name}
                            className="w-full h-48 object-cover rounded-t-lg"
                          />
                          <p className="text-sm text-gray-700 pt-3">
                            {product.description}
                          </p>
                          <div className="mt-4">
                            <div className="flex items-center justify-center">
                              <button
                                onClick={() => handleQuantityChange(-1)}
                                className="px-2 py-1 mx-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                              >
                                -
                              </button>
                              <span>{quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(1)}
                                className="px-2 py-1 mx-2 text-gray-800 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 bg-gray-50 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 rounded-md shadow-sm sm:ml-3 sm:w-auto sm:text-sm hover:bg-indigo-700 focus:outline-none"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                    {showLogin && (
                      <Login isOpen={showLogin} onClose={closeLoginModal} />
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default ProductCard;
