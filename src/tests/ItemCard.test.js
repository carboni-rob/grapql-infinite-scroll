import React from "react";
import { render, screen } from "@testing-library/react";
import { ItemCard } from "../components/ItemCard";

const item = {
  title: "title",
  url: "www.fake.url.com",
  by: { id: "author" },
  score: 100,
  timeISO: "2020-07-05T15:47:26.000Z",
};

const tree = <ItemCard index={1} item={item} />;

describe("<ItemCard />", () => {
  it("should render", () => {
    render(tree);
  });

  it("should render the title", () => {
    render(tree);

    screen.getByText(/title/i);
  });

  it("should render the author", () => {
    render(tree);

    screen.getByText(/author/i);
  });

  it("should render the time lapsed", () => {
    const realDateNow = Date.now.bind(global.Date);
    const dateNowStub = jest.fn(() => 1530518207007);
    global.Date.now = dateNowStub;

    render(tree);
    screen.getByText(/in 2 years/i);

    global.Date.now = realDateNow;
  });

  it("should render the score", () => {
    render(tree);

    screen.getByText(/Points: 100/i);
  });
});
