const Input = ({ className, ...props }) => {
  return (
    <input
      className={`w-full text-sm border rounded outline-none ${props.type === "file" ? "file:mr-3 file:h-full file:bg-green-500 file:text-white file:px-3 file:py-2 file:rounded file:cursor-pointer" : "px-3 py-2"} ${className}`}
      {...props}
    />
  );
};

export default Input;
