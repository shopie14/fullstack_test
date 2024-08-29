const Button = ({
  label = "Button",
  type = "button",
  className = "",
  disable = false,
}) => {
  return (
    <button
      type={type}
      className={`text-white bg-primary hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full text-center px-5 py-2.5 ${className}`}
      disabled={disable}
    >
      {label}
    </button>
  );
};

export default Button;
