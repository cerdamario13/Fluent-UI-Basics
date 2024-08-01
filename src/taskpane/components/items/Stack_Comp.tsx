import * as React from "react";
import { DefaultButton, Stack, Text } from "@fluentui/react";

export const Stack_Comp = () => {

  const stackTokens = { childrenGap: 20 };

  return (
    <>
      <Stack tokens={stackTokens}>
        <Text variant="xLarge">Stack Items</Text>
        <DefaultButton text="Btn1" />
        <DefaultButton text="Btn1" />
        <DefaultButton text="Btn1" />
      </Stack>
    </>
  )
}