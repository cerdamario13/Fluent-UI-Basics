import * as React from "react";

import { Dialog, DialogType, DialogFooter } from "@fluentui/react";

export const Dialog_Comp: React.FC = () => {
  const [hideDialog, setHideDialog] = React.useState(true);

  const toggleHideDialog = () => {
    setHideDialog(!hideDialog);
  };

  return (
    <div>
      <Dialog
        hidden={hideDialog}
        onDismiss={toggleHideDialog}
        dialogContentProps={{
          type: DialogType.normal,
          title: "All emails together",
          subText: "Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails."
        }}
        modalProps={{
          titleAriaId: "myLabelId",
          subtitleAriaId: "mySubTextId",
          isBlocking: false,
          styles: { main: { maxWidth: 450 } }
        }}
      >
        <DialogFooter>
          <button onClick={toggleHideDialog}>Close</button>
        </DialogFooter>
      </Dialog>
      <button onClick={toggleHideDialog}>Open Dialog</button>
    </div>
  );
};