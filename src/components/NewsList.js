import React from "react";

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
    ? news.filter((item) => item.title.includes(filter))
    : news;

  return (
    <div>
      <ul>
        {listToRender?.map(
          (news) => news && <li key={news.id}>{news.title}</li>
        )}
      </ul>
    </div>
  );
};
