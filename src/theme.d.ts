// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ThemeOptions } from "@mui/material/styles";

declare module '@mui/material/styles' {
    interface Theme {
        status: {
            pureWhite: string,
            lightGrey: string,
            gunMetal: string,
            darkElectricBlue: string,
            blue: string,
        }
    }
    interface ThemeOptions {
        status: {
            pureWhite: React.CSSProperties['color'],
            lightGrey: React.CSSProperties['color'],
            gunMetal:  React.CSSProperties['color'],
            darkElectricBlue:  React.CSSProperties['color'],
            blue: React.CSSProperties['color'],
        }
    }
}