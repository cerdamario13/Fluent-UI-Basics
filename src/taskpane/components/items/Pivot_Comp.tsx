import * as React from "react";
import { Pivot, PivotItem, Label } from "@fluentui/react";



export const Pivot_Comp = () => {

  const labelStyles = {
    root: { marginTop: 10 },
  };

  return (
    <Pivot aria-label="Basic Pivot Example">

    <PivotItem
      headerText="My Files"
      headerButtonProps={{
        'data-order': 1,
        'data-title': 'My Files Title',
      }}
    >
      <Label styles={labelStyles}>Pivot #1</Label>
    </PivotItem>

    <PivotItem headerText="Recent">
      <Label styles={labelStyles}>Pivot #2</Label>
    </PivotItem>

    <PivotItem headerText="Shared with me">
      <Label styles={labelStyles}>Pivot #3</Label>
    </PivotItem>
    
  </Pivot>
  )

}