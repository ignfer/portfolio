import {Flex, FloatingIndicator, Paper, Text, UnstyledButton} from "@mantine/core";
import { useState } from 'react';
import {useNavigate} from "react-router";
import {ROUTES} from "../utils/constants.ts";
import logo from "../assets/if-logo-svg.svg";

export default function NavigationBar(){
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [controlsRefs, setControlsRefs] = useState<Record<string, HTMLButtonElement | null>>({});
  const [active, setActive] = useState(ROUTES[0].label);

  const navigate = useNavigate();

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
          navigate(item.label);
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
    <Flex gap={16} m={16}>
      <Paper
        withBorder
        bg={'transparent'}
        h={'fit-content'}
        radius={'lg'}
        p={16}
      >
        <img src={logo} alt="Logo"/>
      </Paper>
      <Paper
        withBorder
        h={'fit-content'}
        radius={'lg'}
        ref={setRootRef}
        className={'bg-linear-to-b from-[var(--mantine-color-dark-light)] to-[var(--mantine-color-dimmed)]'}
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
              className={'rounded-lg bg-white border-solid border-1'}
              p={16}
            />
        </Flex>
      </Paper>
    </Flex>
  );
}