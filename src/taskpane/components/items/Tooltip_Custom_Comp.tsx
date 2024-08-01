import { ITooltipProps, PrimaryButton, TooltipHost } from "@fluentui/react";
import * as React from "react";

export const Tooltip_Custom_Comp = () => {

  return (

    //Show a tooltip with a custom content
    <TooltipHost
      calloutProps={{ gapSpace: 0 }} // Gap between the tooltip and the target
      tooltipProps={tooltipConcatProps}
    >
      <PrimaryButton text="Hover over me" />
    </TooltipHost>
  )

};

//Render a tooltip with a custom content
const tooltipConcatProps: ITooltipProps = {
  onRenderContent: () => (
    <>
      <h3>Example</h3>
      <p>Random info about this button</p>
      <p><em>a | b | c &nbsp;&nbsp;➔&nbsp;&nbsp; abc</em></p>
    </>
  ),
};