import React from 'react';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider } from 'styled-components';

import { graphqlClient } from './services';
import { CharacterListView } from './views';
import { getAllPeople } from './services';
import { AppStyles } from './App.styles';
import { GlobalStyles, theme } from './styles';
import logoUrl from '../assets/images/logo-star-wars.png';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={graphqlClient}>
        <AppStyles>
          <GlobalStyles />
          <header>
            <img className="logo" src={logoUrl} alt="Star wars logo" />
          </header>
          <main>
            <CharacterListView />
          </main>
        </AppStyles>
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default hot(App);
