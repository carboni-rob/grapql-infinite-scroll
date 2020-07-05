import React from "react";

export const NewsCard = ({ news, onLoadMore }) => {
  const scrollHandler = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 300
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

  return (
    <div>
      <ul>
        {news?.map((news) => news && <li key={news.id}>{news.title}</li>)}
      </ul>
    </div>
  );
};
