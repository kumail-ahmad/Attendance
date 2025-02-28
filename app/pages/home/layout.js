import { ThemeProvider } from "@/app/ThemeProvider";
import React from "react";

function layout({ children }) {
  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </div>
  );
}

export default layout;
