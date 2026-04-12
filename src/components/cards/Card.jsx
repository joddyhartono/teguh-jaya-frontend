import { Link } from "react-router";

const Card = ({ link, image, title, price }) => {
  return (
    <Link
      to={link}
      className="block w-full md:w-64 rounded overflow-hidden shadow-md hover:shadow-lg"
    >
      <div className="h-36 md:h-40 w-full overflow-hidden">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      <div className="p-3">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <p className="text-sm font-semibold mt-1">Rp {price}</p>
      </div>
    </Link>
  );
};

export default Card;
