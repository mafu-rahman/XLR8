import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Input from "./Input";

const Login = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatusMessage, setLoginStatusMessage] = useState("");
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailRegex.test(email));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (emailError) {
      setLoginStatusMessage("Please enter a valid email address.");
      return;
    }

    const loginApiUrl = "http://localhost:8081/api/v1/login";
    try {
      const response = await fetch(loginApiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) {
        throw new Error("Login failed, please try again.");
      }
      const data = await response.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("cartId", data.cartId);
      setLoginStatusMessage("Login successful!");
      onClose();
    } catch (error) {
      setLoginStatusMessage("Login unsuccessful!");
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="z-10 relative">
      <div className="bg-opacity-75 bg-gray-500 inset-0 fixed" />
      <div className="inset-0 overflow-y-auto fixed">
        <div className="justify-center min-h-full flex p-4 items-center">
          <Dialog.Panel className="text-left p-6 bg-white transform max-w-md w-full rounded-2xl overflow-hidden align-middle transition-all shadow-xl">
            <button
              onClick={onClose}
              className="focus:outline-none text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 rounded-md absolute right-4 top-4"
            >
              <XMarkIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <Dialog.Title
              as="h3"
              className="text-gray-900 leading-6 font-medium text-lg"
            >
              Log in to your account
            </Dialog.Title>
            <form className="mt-2" onSubmit={handleLogin}>
              <Input
                label="Email"
                type="email"
                error={emailError}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateEmail(e.target.value);
                }}
              />
              <br></br>
              <Input
                label="Password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {loginStatusMessage && (
                <div className="text-m text-gray-900 mt-2">
                  {loginStatusMessage}
                </div>
              )}
              <div className="mt-4">
                <button
                  type="submit"
                  className="text-sm text-white bg-indigo-600 border border-transparent rounded-md px-4 py-2 inline-flex justify-center hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                >
                  Log in
                </button>
              </div>
            </form>
            <div className="mt-4">
              <button
                type="button"
                className="text-indigo-600 text-sm hover:underline"
                onClick={() => {
                  /* TODO */
                }}
              >
                Forgot password?
              </button>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
};

export default Login;
