import * as React from "react";
import { Text, Stack } from "@fluentui/react";
import { Pivot_Comp } from "./items/Pivot_Comp";
import { Stack_Comp } from "./items/Stack_Comp";
import { Dropdown_Comp } from "./items/Dropdown_Comp";
import { Button_Menu } from "./items/Button_Menu";


const App: React.FC = () => {

  return (
    <Stack>
      <Text variant="xLarge">
        Custom Component
      </Text>
      <Button_Menu />
    </Stack>
  );
};

export default App;
