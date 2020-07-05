import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { NewsList } from "../components/NewsList";

const news = [
  {
    id: "1",
    title: "title1",
    url: "www.fake.url.com",
    by: { id: "author" },
    score: 100,
    timeISO: "2020-07-05T15:47:26.000Z",
  },
  {
    id: "2",
    title: "title2",
    url: "www.fake.url.com",
    by: { id: "author" },
    score: 100,
    timeISO: "2020-07-05T15:47:26.000Z",
  },
  {
    id: "3",
    title: "title3",
    url: "www.fake.url.com",
    by: { id: "author" },
    score: 100,
    timeISO: "2020-07-05T15:47:26.000Z",
  },
];

const onLoadMoreMock = jest.fn();

const tree = <NewsList news={news} filter={""} onLoadMore={onLoadMoreMock} />;

describe("<NewsList />", () => {
  it("shoud render", () => {
    render(tree);

    expect(screen.getByText(/title1/)).toBeInTheDocument();
    expect(screen.getByText(/title2/)).toBeInTheDocument();
    expect(screen.getByText(/title3/)).toBeInTheDocument();
  });

  it("shoud apply the filter", () => {
    render(<NewsList news={news} filter={"2"} onLoadMore={onLoadMoreMock} />);

    expect(screen.getByText(/title2/)).toBeInTheDocument();
    expect(screen.queryByText(/title1/)).not.toBeInTheDocument();
    expect(screen.queryByText(/title3/)).not.toBeInTheDocument();
  });

  it("shoud call onLoadMore on scroll", () => {
    render(tree);

    expect(onLoadMoreMock).not.toBeCalled();

    fireEvent.scroll(window, { target: { scrollY: 100 } });

    expect(onLoadMoreMock).toBeCalled();
  });
});
