import React from "react"
import ThemeColors from "./theme/themeColors"
import GlobalStyles from "./theme/global.styles"
import App from "./App"
import { ThemeProvider } from "styled-components"
import { render } from "react-dom"

render(
    <ThemeProvider theme={ThemeColors}>
        <React.StrictMode>
            <App />
            <GlobalStyles />
        </React.StrictMode>
    </ThemeProvider>,
    document.getElementById("root")
)
