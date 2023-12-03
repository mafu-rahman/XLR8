import { useState } from "react";
import Input from "./Input";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Signup = ({ isOpen, onClose, showLogin }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [signUpStatusMessage, setSignUpStatusMessage] = useState("");

  const handleClick = (e) => {
    if (!firstName.trim()) {
      setSignUpStatusMessage("First Name is required");
      return;
    }
    if (!lastName.trim()) {
      setSignUpStatusMessage("Last Name is required");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setSignUpStatusMessage("Email is required");
      return;
    }
    if (password.length < 6) {
      setSignUpStatusMessage("Password must be at least 6 characters");
      return;
    }
    if (!street.trim()) {
      setSignUpStatusMessage("Street is required");
      return;
    }
    if (!city.trim()) {
      setSignUpStatusMessage("City is required");
      return;
    }
    if (!province.trim()) {
      setSignUpStatusMessage("Province is required");
      return;
    }
    if (!zipCode.trim()) {
      setSignUpStatusMessage("Zip Code is required");
      return;
    }
    if (!country.trim()) {
      setSignUpStatusMessage("Country is required");
      return;
    }
    if (!phoneNumber.trim()) {
      setSignUpStatusMessage("Phone Number is required");
      return;
    }

    const user = {
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      address: {
        street,
        city,
        province,
        zipCode,
        country,
      },
    };
    fetch("http://localhost:8081/api/v1/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
        setSignUpStatusMessage("Sign up successful");
        showLogin();
      })
      .catch((error) => {
        setSignUpStatusMessage(error.message);
      });
  };

  return (
    <div
      className={`fixed inset-0 ${isOpen ? "z-20" : "z-10"} overflow-y-auto`}
    >
      <div className="flex items-center justify-center min-h-full p-4">
        <div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full p-6">
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <XMarkIcon className="h-6 w-6 text-gray-600 hover:text-gray-800" />
          </button>
          <h1 className="text-lg font-medium text-gray-900">Create Account</h1>
          <form className="mt-2" onSubmit={handleClick}>
            <Input
              label="First Name"
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              label="Last Name"
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <Input
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              label="Street"
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <Input
              label="City"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Input
              label="Province"
              type="text"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <Input
              label="Zip Code"
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            />
            <Input
              label="Country"
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <Input
              label="Phone Number"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button
              type="submit"
              className="mt-4 w-full inline-flex justify-center rounded-md border border-transparent px-4 py-2 bg-indigo-600 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button>
            <p className="mt-2 text-sm text-indigo-900">
              {signUpStatusMessage}
            </p>
            <button
              type="button"
              className="mt-4 text-indigo-600 text-m hover:underline"
              onClick={showLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
