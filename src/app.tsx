import './app.css';

import Header from './components/header/header.tsx';
import Main from './components/main/main.tsx';

import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import {MantineProvider} from '@mantine/core';
import {BrowserRouter} from "react-router";
import NavigationBar from "./pages/navigation-bar.tsx";

function App() {
  return (
    <MantineProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        {/*<NavigationBar/>*/}
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
