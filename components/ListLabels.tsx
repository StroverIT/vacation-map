"use client"

import { useMemo, useState } from "react";

export default function ListLabels({
  data,
  findListCardsById,
  cards
}: {
  data: any;
  findListCardsById: any;
}) {
  const [isHidden, setIsHidden] = useState(true);

  const foundCards = useMemo(()=>{
      return cards.filter((card) => card.idList === data.id);
  },[cards])
  
  const openCloseMenuHandler = () =>{
    setIsHidden(!isHidden)
  }
  return (
    <div key={data.id} className="border p-4">
      <h2 className="text-2xl font-semibold" onClick={openCloseMenuHandler}>{data.name}</h2>
      <div className={`${isHidden ? "hidden" : ""}`}>
        {foundCards.map((card) => {
          return (
            <div key={card.id} className="border p-4 my-4">
              <h3 className="">{card.name}</h3>
              <p>{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
