export default function ListLabels({
  data,
  findListCardsById,
}: {
  data: any;
  findListCardsById: any;
}) {
  const cards = findListCardsById(data.id);
  return (
    <div key={data.id} className="border p-4">
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      {cards.map((card) => {
        return (
          <div key={card.id} className="border p-4 my-4">
            <h3 className="">{card.name}</h3>
            <p>{card.desc}</p>
          </div>
        );
      })}
    </div>
  );
}
