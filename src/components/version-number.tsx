import {VERSION_NUMBER} from "../utils/constants.ts";
import {Text} from '@mantine/core';

export default function VersionNumber(){
  return(
    <Text
      pos={'absolute'}
      bottom={16}
      right={16}
      fw={700}
      c={'dimmed'}
    >
      {VERSION_NUMBER}
    </Text>
  )
}