import ReactDOM from 'react-dom'
import { CssBaseline } from '@mui/material'
import { ThemeProvider } from '@mui/system'

import { theme } from './mui/theme'
import App from './App'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
