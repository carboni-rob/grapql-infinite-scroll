import React from "react";
import { ItemCard } from "./ItemCard";

export const NewsList = ({ news, filter, onLoadMore }) => {
  const scrollHandler = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      onLoadMore();
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return function cleanup() {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  const listToRender = filter.length
    ? news.filter((item) => item.title.toLowerCase().includes(filter))
    : news;

  return (
    <div>
      {listToRender?.map(
        (item, index) =>
          news && <ItemCard key={item.id} index={index} item={item}></ItemCard>
      )}
    </div>
  );
};
