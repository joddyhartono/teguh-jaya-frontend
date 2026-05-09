import Card from "./Card";

const SummaryCard = ({ count, title }) => {
  return (
    <Card className="p-6 flex flex-col items-center gap-1 border">
      <h1 className="text-3xl md:text-4xl font-semibold">{count}</h1>
      <h2 className="mt-3 md:mt-4">{title}</h2>
    </Card>
  );
};

export default SummaryCard;
