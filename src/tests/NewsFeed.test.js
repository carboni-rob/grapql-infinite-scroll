import React from "react";
import { render } from "@testing-library/react";
import { FEED_QUERY, NewsFeed } from "../components/NewsFeed";
import { MockedProvider } from "@apollo/react-testing";

const mocks = [
  {
    request: {
      query: FEED_QUERY,
      variables: {
        limit: 30,
        offset: 0,
      },
    },
    result: {
      data: {
        hn: {
          newsStories: [
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
          ],
        },
      },
    },
  },
];

describe("<NewsFeed />", () => {
  it("should render", () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <NewsFeed />
      </MockedProvider>
    );
  });
});
