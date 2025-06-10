import './app.css';

import '@mantine/core/styles.css';
import '@mantine/spotlight/styles.css';

import {AppShell, Burger, Combobox, Flex, Group, MantineProvider, UnstyledButton} from '@mantine/core';
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NavigationBar from "./pages/navigation-bar.tsx";
import Home from "./pages/hero/home.tsx";
import Blog from "./pages/blog.tsx";
import Projects from "./pages/projects.tsx";
import Education from "./pages/education.tsx";
import {useDisclosure} from "@mantine/hooks";
import VersionNumber from "./components/version-number.tsx";

function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineProvider defaultColorScheme={"dark"}>
      <VersionNumber/>
      <BrowserRouter>
        <AppShell
          header={{ height: 72 }}
          navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: true, mobile: !opened } }}
          padding="md"
        >
          <AppShell.Header bg={'transparent'} bd={'none'}>
              <NavigationBar opened={opened} toggle={toggle}/>
          </AppShell.Header>

          <AppShell.Navbar >
            {/*<NavigationBar/>*/}
          </AppShell.Navbar>

          <AppShell.Main>
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/home" replace/>}
              />
              <Route
                path="/home"
                element={<Home/>}
              />
              <Route
                path="/blog"
                element={<Blog/>}
              />
              <Route
                path="/projects"
                element={<Projects/>}
              />
              <Route
                path="/education"
                element={<Education/>}
              />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </BrowserRouter>
    </MantineProvider>
  );
}

export default App;
