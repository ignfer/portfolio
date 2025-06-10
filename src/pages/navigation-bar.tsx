import {ActionIcon, Burger, Button, Center, Flex, FloatingIndicator, Paper, Text, UnstyledButton, useMantineColorScheme} from "@mantine/core";
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
      pl={64}
      pr={64}
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
      gap={16}
      w={'100%'}
      align={'center'}
      justify={'center'}
      h={'100%'}
    >
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Paper
        withBorder
        radius={'lg'}
        p={16}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        shadow={'xl'}
        h={'100%'}
      >
        <img src={colorScheme === 'dark' ? logoDarkTheme : logoLightTheme } alt="Logo" height={'100%'}/>
      </Paper>
      <Paper
        withBorder
        h={'fit-content'}
        radius={'lg'}
        ref={setRootRef}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        shadow={'xl'}
      >
        <Flex
          gap={64}
          p={16}
          justify={'center'}
          align={'center'}
          pos={'relative'}
        >
          {controls}
            <FloatingIndicator
              target={controlsRefs[active]}
              parent={rootRef}
              className={'rounded-lg bg-[var(--mantine-color-bright)] border-solid border-1'}
              p={16}
            />
        </Flex>
      </Paper>
      <Paper
        withBorder
        h={'100%'}
        radius={'lg'}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--surface-0)]'}
        onClick={() => toggleColorScheme()}
        shadow={'xl'}
      >
        <UnstyledButton>Change theme </UnstyledButton>
      </Paper>
    </Flex>
  );
}