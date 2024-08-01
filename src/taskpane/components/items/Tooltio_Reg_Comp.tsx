import { PrimaryButton, TooltipHost } from "@fluentui/react";
import * as React from "react";

export const Tooltip_Reg_Comp = () => {

  return (

    //Show a tooltip with a custom content
    <TooltipHost
      calloutProps={{ gapSpace: 0 }} // Gap between the tooltip and the target
      content="This is a simple tooltip"
      styles={{ root: { display: "inline-block" } }} //Change this for positioning
    >
      <PrimaryButton text="Hover over me" />
    </TooltipHost>
  )

};