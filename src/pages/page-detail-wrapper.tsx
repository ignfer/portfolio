import {Flex, Paper, Text} from "@mantine/core";
import React from "react";

type PageDetailWrapperProps = {
  label: string
  children: React.ReactNode
}
export default function PageDetailWrapper({label, children}: PageDetailWrapperProps){
  return(
      <Paper className={'static'} withBorder radius={'lg'} p={16}>
      <Text className={'relative top-[-32px]'}>{label}</Text>
        {children}
      </Paper>
  );
}