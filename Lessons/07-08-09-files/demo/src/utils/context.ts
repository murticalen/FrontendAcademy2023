import { DefaultTheme } from "styled-components"
import { createContext } from "react"

interface ThemeSetterContextInterface {
    setTheme: (theme: DefaultTheme) => void
}

export const ThemeSetterContext = createContext<ThemeSetterContextInterface>({} as ThemeSetterContextInterface)
