import './app.css';

import Header from './components/header/header.tsx';
import Main from './components/main/main.tsx';

import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import {MantineProvider} from '@mantine/core';
import {BrowserRouter} from "react-router";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
