const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full px-3 py-2 text-sm border rounded outline-none ${className}`}
      {...props}
    />
  );
};

export default Input;
