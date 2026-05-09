const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`px-3 md:px-4 py-2 text-sm md:text-base rounded cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
