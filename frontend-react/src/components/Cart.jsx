import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

function Cart({ open, setOpen }) {
  const [products, setProducts] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const cartId = localStorage.getItem("cartId");
  const token = localStorage.getItem("token");

  const navigate = useNavigate();

  const handleCheckout = () => {
    setOpen(false);
    navigate("/checkout");
  };

  useEffect(() => {
    fetch(
        // `http://localhost:8081/api/v1/cart/get-items-info?cartId=${cartId}`,
        'https://axlr8-backend-kyxs.onrender.com/api/v1/cart/get-items-info?cartId=${cartId}',
        {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setShowLogin(true);
      });
  }, []);

  const closeLoginModal = () => {
    setShowLogin(false);
  };

  const handleRemove = (cartItemId) => {
    fetch(
      `http://localhost:8081/api/v1/cart/deleteItem?cartUuid=${cartId}&itemUuid=${cartItemId}&quantity=1`,
      {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Network error");
        return response;
      })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts
            .map((product) => {
              const newCartItems = product.cartItems.map((item) =>
                item.cartItemId === cartItemId
                  ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
                  : item
              );

              return newCartItems.some((item) => item.quantity > 0)
                ? { ...product, cartItems: newCartItems }
                : null;
            })
            .filter(Boolean)
        );
      })
      .catch((error) => console.error("Error deleting item: ", error));
  };

  const calculateTotal = () => {
    return products.reduce((total, product) => {
      const quantity = product.cartItems.reduce(
        (sum, item) => sum + item.quantity,
        0
      );
      return total + product.price * quantity;
    }, 0);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative" onClose={setOpen}>
        <div className="fixed inset-0">
          <div className="absolute inset-0">
            <div className="fixed inset-y-0 right-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-500"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="ease-in-out duration-500"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="w-screen max-w-md">
                  <div className="flex h-full flex-col bg-gray-100">
                    <div className="flex-1 overflow-auto p-6">
                      <div className="flex justify-between">
                        {showLogin && (
                          <Login isOpen={showLogin} onClose={closeLoginModal} />
                        )}
                        <Dialog.Title className="text-lg font-bold">
                          Shopping Cart
                        </Dialog.Title>
                        <button
                          type="button"
                          className="rounded-md text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                      <ul role="list" className="mt-8">
                        {products.map((product) => (
                          <li key={product.productId} className="py-6 flex">
                            <img
                              src={
                                "https://hips.hearstapps.com/hmg-prod/images/2024-lamborghini-revuelto-127-641a1d518802b.jpg?crop=0.813xw:0.721xh;0.0994xw,0.128xh&resize=1200:*"
                              }
                              alt={"lambo"}
                              className="h-20 w-25 flex-shrink-0 mr-4"
                            />
                            <div className="flex-1 flex justify-between text-sm">
                              <div>
                                <p className="font-medium">{product.name}</p>
                                <p>{product.brand}</p>
                                <p>${product.price}</p>
                                <p>Qty: {product.cartItems[0].quantity}</p>
                              </div>
                              <button
                                type="button"
                                className="text-red-600 hover:text-red-500"
                                onClick={() =>
                                  handleRemove(product.cartItems[0].cartItemId)
                                }
                              >
                                Delete
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t p-6">
                      <div className="flex justify-between text-base font-medium">
                        <p>Total</p>
                        <p>${calculateTotal().toFixed(2)}</p>
                      </div>
                      <button
                        className="mt-6 w-full rounded-md bg-indigo-600 py-2 px-4 text-white text-sm hover:bg-indigo-700"
                        onClick={handleCheckout}
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Cart;
