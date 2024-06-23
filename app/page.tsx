import ListLabels from "@/components/ListLabels";
import { promises as fs } from "fs";
// import { formatTrelloData } from "@/utils/formatDocument";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/data/places.json", "utf8");
  const { lists, cards } = JSON.parse(file);

  // formatTrelloData({ lists, cards });

  const findListCardsById = (id: string) => {
    return cards.filter((card) => card.idList === id);
  };
  return (
    <main className="container  text-center">
      <h1 className="text-4xl text-center my-4">Места за посещаване</h1>
      <div className="grid grid-cols-2 gap-4">
        {lists.map((list) => (
          <ListLabels
            key={list.id}
            data={list}
            findListCardsById={findListCardsById}
          />
        ))}
      </div>
    </main>
  );
}
