import React, { Component } from "react";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { NewsFeed } from "./NewsFeed";

import "../styles/App.css";

const httpLink = createHttpLink({
  uri: "https://www.graphqlhub.com/graphql",
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <NewsFeed />
      </ApolloProvider>
    );
  }
}

export default App;
