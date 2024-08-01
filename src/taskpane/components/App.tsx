import { DefaultButton, Stack, Text } from "@fluentui/react";
import * as React from "react";

const App: React.FC = () => {


  const stackTokens = { childrenGap: 10 };

  
  return (
    <>
    <Stack tokens={stackTokens}>
      <Text variant="xLarge">Stack Items</Text>
      <DefaultButton text="Btn1"/>
      <DefaultButton text="Btn1"/>
      <DefaultButton text="Btn1"/>
    </Stack>
    </>
  );
};

export default App;
