import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';

import Header from './components/Header';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <main className="App">
        <Header />
        Hello!
      </main>
    </ThemeProvider>
  );
}

export default App;
