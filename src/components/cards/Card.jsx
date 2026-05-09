const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`block w-full md:w-64 rounded overflow-hidden shadow-md hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
