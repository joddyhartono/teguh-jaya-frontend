import { Link } from "react-router";
import Card from "./Card";
import Button from "../buttons/Button";

const ItemCard = ({
  link,
  image,
  title,
  price,
  isLoggedIn,
  onDelete,
  updateLink,
}) => {
  return (
    <Card>
      <Link to={link}>
        <div className="h-36 md:h-40 w-full overflow-hidden">
          <img src={image} alt={title} className="h-full w-full object-cover" />
        </div>

        <div className="p-3">
          <h3 className="text-md font-medium">{title}</h3>
          {price && <p className="text-md font-semibold mt-1">Rp {price}</p>}
        </div>
      </Link>

      {isLoggedIn && (
        <div className="p-3 pt-0 flex items-center gap-2">
          <Link
            className="px-3 md:px-4 py-2 text-sm md:text-base rounded cursor-pointer bg-yellow-500 text-white"
            to={updateLink}
          >
            Update
          </Link>
          <Button className="bg-red-500 text-white" onClick={onDelete}>
            Delete
          </Button>
        </div>
      )}
    </Card>
  );
};

export default ItemCard;
