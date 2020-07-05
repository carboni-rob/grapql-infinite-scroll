import React from "react";
import { NewsList } from "./NewsList";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import uniqby from "lodash.uniqby";
import { SearchBar } from "./SearchBar";

const ITEMS_LIMIT = 30;

const FEED_QUERY = gql`
  query newStories($limit: Int, $offset: Int) {
    hn {
      newStories(limit: $limit, offset: $offset) {
        id
        title
        by
        timeISO
        score
        url
      }
    }
  }
`;

export const NewsFeed = () => {
  const [filter, setFilter] = React.useState("");

  const { data, fetchMore } = useQuery(FEED_QUERY, {
    variables: {
      limit: ITEMS_LIMIT,
      offset: 0,
    },
  });

  return data ? (
    <>
      <SearchBar setFilter={setFilter} />
      <NewsList
        filter={filter}
        news={data.hn.newStories}
        onLoadMore={() => {
          fetchMore({
            variables: {
              offset: data.hn.newStories.length,
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (!fetchMoreResult) {
                return prev;
              }

              return Object.assign({}, prev, {
                hn: {
                  newStories: uniqby(
                    [...prev.hn.newStories, ...fetchMoreResult.hn.newStories],
                    "id"
                  ),
                  __typename: "HackerNewsAPI",
                },
              });
            },
          });
        }}
      />
    </>
  ) : (
    <p>Loading...</p>
  );
};
