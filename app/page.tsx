import ListLabels from "@/components/ListLabels";
import GoogleMap from "@/components/Map";
import { promises as fs } from "fs";
// import { formatTrelloData } from "@/utils/formatDocument";

export default async function Home() {
  // formatTrelloData({ lists, cards });

  const file = await fs.readFile(process.cwd() + "/data/places.json", "utf8");
  const { lists, cards } = JSON.parse(file);

  return (
    <main className="container  text-center">
      <h1 className="text-4xl text-center my-4">Места за посещаване</h1>
      <div className="grid grid-cols-2 self-start">
        <div className="grid gap-4">
          {lists.map((list) => (
            <ListLabels
              key={list.id}
              data={list}
              cards={cards}
            />
          ))}
        </div>
        <GoogleMap />
      </div>
    </main>
  );
}
