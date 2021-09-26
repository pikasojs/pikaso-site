import { HashRouter as Router } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import { useGlobalStyle } from './mui/global-styles'

export default function App() {
  useGlobalStyle()

  return (
    <>
      <Router>
        <AppLayout />
      </Router>
    </>
  )
}
