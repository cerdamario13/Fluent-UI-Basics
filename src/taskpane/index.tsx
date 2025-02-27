import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { ThemeProvider } from "@fluentui/react";
import { initializeIcons } from '@fluentui/font-icons-mdl2';

//Initialize icons for the app
initializeIcons();

/* global document, Office, module, require, HTMLElement */

const title = "Contoso Task Pane Add-in";

const rootElement: HTMLElement | null = document.getElementById("container");
const root = rootElement ? createRoot(rootElement) : undefined;

/* Render application after Office initializes */
Office.onReady(() => {
  root?.render(
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  );
});

if ((module as any).hot) {
  (module as any).hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    root?.render(NextApp);
  });
}
