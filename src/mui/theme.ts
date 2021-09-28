import { createTheme } from '@mui/material'

export const theme = createTheme({
  palette: {
    primary: {
      main: '#264653'
    },
    secondary: {
      main: '#f4a261'
    }
  },
  typography: {
    fontFamily: 'Lato',
    fontSize: 14,
    button: {
      textTransform: 'none'
    }
  }
})
