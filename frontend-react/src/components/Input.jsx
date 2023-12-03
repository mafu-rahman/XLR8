const Input = ({ type, error = false, label, onChange, value }) => {
  return (
    <div className="relative w-full">
      <input
        required
        placeholder={label}
        type={type}
        value={value}
        onChange={onChange}
        className={`peer w-full rounded-md border-2 p-4 font-light outline-none transition duration-150 ease-in-out ${
          error
            ? "border-red-500 bg-red-50 text-red-900"
            : "border-gray-300 bg-white text-gray-700"
        } focus:ring-2 ${
          error
            ? "focus:ring-red-500 focus:border-red-500"
            : "focus:ring-green-500 focus:border-green-500"
        }`}
      />
    </div>
  );
};

export default Input;
