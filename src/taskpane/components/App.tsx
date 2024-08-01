import * as React from "react";
import { Text, Stack } from "@fluentui/react";
import { Pivot_Comp } from "./items/Pivot_Comp";
import { Stack_Comp } from "./items/Stack_Comp";
import { Dropdown_Comp } from "./items/Dropdown_Comp";
import { Button_Menu } from "./items/Button_Menu";
import { Tooltip_Custom_Comp } from "./items/Tooltip_Custom_Comp";
import { Tooltip_Reg_Comp } from "./items/Tooltio_Reg_Comp";
import { Dialog_Comp } from "./items/Dialog_Comp";


const App: React.FC = () => {

  return (
    <Stack>
      <Text variant="xLarge">
        Custom Component
      </Text>

      <br />
      <br />

      {/* //Edit this */}
      <Dialog_Comp />
    </Stack>
  );
};

export default App;
