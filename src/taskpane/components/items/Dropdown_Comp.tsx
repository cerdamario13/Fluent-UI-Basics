import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles, ResponsiveMode } from "@fluentui/react";
import * as React from "react";

export const Dropdown_Comp = () => {

  const dropdownStyles: Partial<IDropdownStyles> = {
    dropdown: { width: 300 },
  };

  const options: IDropdownOption[] = [
    { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
    { key: 'apple', text: 'Apple' },
    { key: 'banana', text: 'Banana' },
    { key: 'orange', text: 'Orange', disabled: true },
    { key: 'grape', text: 'Grape' },
    { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
    { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
    { key: 'broccoli', text: 'Broccoli' },
    { key: 'carrot', text: 'Carrot' },
    { key: 'lettuce', text: 'Lettuce' },
  ];

  return (
    <>
      <Dropdown
        placeholder="Select an option"
        label="Basic uncontrolled example"
        options={options}
        styles={dropdownStyles}
        responsiveMode={ResponsiveMode.large} //To make it not panel type
      />
    </>
  )
}