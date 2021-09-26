import { BrowserRouter as Router } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { useGlobalStyle } from './mui/global-styles'

export default function App() {
  useGlobalStyle()

  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <AppLayout />
      </Router>
    </>
  )
}
