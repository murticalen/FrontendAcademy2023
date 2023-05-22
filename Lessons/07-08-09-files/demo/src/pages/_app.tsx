import { darkTheme, lightTheme, themes } from "@/utils/theme";
import "@/styles/globals.css";
import { ThemeSetterContext } from "@/utils/context";
import { fetcher } from "@/utils/fetcher";
import type { AppProps } from "next/app";
import { useState } from "react";
import { ThemeContext } from "styled-components";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(themes.light);

  return (
    <ThemeSetterContext.Provider value={{ setTheme }}>
      <ThemeContext.Provider value={theme}>
        <SWRConfig value={{ fetcher }}>
          <div id="portal-root" />
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeContext.Provider>
    </ThemeSetterContext.Provider>
  );
}
