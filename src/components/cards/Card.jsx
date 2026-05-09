const Card = ({ children, className, ...props }) => {
  return (
    <div
      className={`block w-full rounded shadow-md hover:shadow-lg ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
