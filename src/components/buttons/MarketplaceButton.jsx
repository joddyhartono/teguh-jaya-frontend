import Button from "./Button";

const MarketplaceButton = ({ link, color, text }) => {
  return (
    <a href={link}>
      <Button className={`flex items-center gap-2 w-full md:w-auto ${color}`}>
        {text}
      </Button>
    </a>
  );
};

export default MarketplaceButton;
