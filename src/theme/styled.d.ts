import 'styled-components'
import theme from './themeColors'

declare module 'styled-components' {
    type ThemeType = typeof theme
    export interface DefaultTheme extends ThemeType {}
}
