import {ActionIcon, Burger, Button, Center, Flex, FloatingIndicator, Grid, Group, Kbd, Paper, SimpleGrid, Text, UnstyledButton, useMantineColorScheme} from "@mantine/core";
import { useState } from 'react';
import {useNavigate} from "react-router";
import {ROUTES} from "../utils/constants.ts";
import logoDarkTheme from "../assets/if-logo-svg-dark-theme.svg";
import logoLightTheme from "../assets/if-logo-svg-light-theme.svg";

export default function NavigationBar({opened, toggle}){
  const {colorScheme, toggleColorScheme} = useMantineColorScheme();
  const navigate = useNavigate();

  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(ROUTES[0].label);

  const setControlRef = (index: number) => (node: HTMLButtonElement) => {
    controlsRefs[index] = node;
    setControlsRefs(controlsRefs);
  };

  const controls = ROUTES.map((item) => (
    <UnstyledButton
      key={item.label}
      ref={setControlRef(item.label)}
      onClick={
        () => {
          setActive(item.label)
          navigate(item.path);
        }
      }
      className={'z-1'}
      p={8}
      pl={32}
      pr={32}
    >
      <Text
        fw={600}
        size={'sm'}
      >
        {item.label}
      </Text>
    </UnstyledButton>
  ));

  return (
    <Flex
      w={'100%'}
      h={'100%'}
      justify={'center'}
    >
    <Grid
      w={'calc(100vw - 10rem)'}
      maw={'75rem'}
      h={'100%'}
      gap={16}
    >
      {/*<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />*/}
      <Grid.Col span={2}>
      <Paper
        w={'100%'}
        h={'100%'}
        withBorder
        radius={'lg'}
        p={16}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        shadow={'xl'}
      >
        {/*<img src={colorScheme === 'dark' ? logoDarkTheme : logoLightTheme } alt="Logo" height={'100%'}/>*/}
      </Paper>
      </Grid.Col>
      <Grid.Col span={8}>
      <Paper
        w={'100%'}
        h={'fit-content'}
        withBorder
        radius={'lg'}
        ref={setRootRef}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        shadow={'xl'}
      >
        <Group
          gap={32}
          p={16}
          justify={'space-between'}
          align={'center'}
          pos={'relative'}
        >
          {controls}
            <FloatingIndicator
              target={controlsRefs[active]}
              parent={rootRef}
              className={'rounded-lg bg-[var(--mantine-color-bright)] border-solid border-1'}
            />
        </Group>
      </Paper>
      </Grid.Col>
      <Grid.Col span={2}>
      <Paper
        w={'100%'}
        h={'100%'}
        withBorder
        radius={'lg'}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        onClick={() => toggleColorScheme()}
        shadow={'xl'}
      >
        <UnstyledButton>Change theme </UnstyledButton>
      </Paper>
    </Grid.Col>
    </Grid>
    </Flex>
  );
}