import './app.css';

import Header from './components/header/header.tsx';
import Main from './components/main/main.tsx';

import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/modals/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/carousel embla-carousel/styles.css';
import '@mantine/code-highlight/styles.css';

import {MantineProvider} from '@mantine/core';

function App() {
  return (
    <Router>
    <MantineProvider>
      <Header/>
      <Main/>
    </MantineProvider>
    </Router>
  );
}

export default App;
