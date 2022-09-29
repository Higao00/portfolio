import React from "react"
import ReactDOM from "react-dom/client"
import ThemeColors from "./theme/themeColors"
import GlobalStyles from "./theme/global.styles"
import App from "./App"
import { ThemeProvider } from "styled-components"

const documentRoot: any = document.getElementById("root")
const root = ReactDOM.createRoot(documentRoot)

root.render(
    <ThemeProvider theme={ThemeColors}>
        <React.StrictMode>
            <App />
            <GlobalStyles />
        </React.StrictMode>
    </ThemeProvider>
)
