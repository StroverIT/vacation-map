import { promises as fs } from "fs";

export const formatTrelloData = ({
  lists,
  cards,
}: {
  lists: any;
  cards: any;
}) => {
  const finishedFile = {
    cards: [],
    lists: [],
  };

  finishedFile.cards = cards.map((card: any) => {
    return {
      idList: card.idList,
      name: card.name,
    };
  });
  finishedFile.lists = lists.map((list: any) => {
    return {
      id: list.id,
      name: list.name,
    };
  });
  fs.writeFile("./data/places.json", JSON.stringify(finishedFile));
};
