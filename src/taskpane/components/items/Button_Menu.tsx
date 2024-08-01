import { CommandButton, IButtonStyles, IIconProps, Toggle } from "@fluentui/react";
import * as React from "react";


export const Button_Menu = () => {

  return (
    <>
      <CommandButton
        split //Determine the button type if it has a split button or not
        styles={commandButtonSettings} //Style the component additionally
        iconProps={{ iconName: 'Settings' }}
        menuIconProps={menuSettings}
        text="Settings"
        //Button menu
        menuProps={{
          items: [
            //Render an additional button
            { 
              key: 'emailMessage', text: 'Email message', iconProps: { iconName: 'Mail' }
            },
            // Render a custom component
            {
              key: 'customRender',
              text: 'Custom Render',
              onRender: () => (
                <Toggle label="Toggle"/>
              )
            }
          ]
        }}
      />
    </>
  )
}

//Additional styles for the component
const commandButtonSettings: IButtonStyles = {
  root: { width: 75, height: 35 },
  splitButtonMenuButton: { border: 'none', background: 'none'}
};
const menuSettings: IIconProps = {
  iconName: "MoreVertical",
  styles: {
    root: {
      cursor: "pointer",
      fontWeight: "bolder",
      fontSize: "medium"
    }
  }
}