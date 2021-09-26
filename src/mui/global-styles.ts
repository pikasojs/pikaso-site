import { makeStyles } from '@mui/styles'

import type { Theme } from '@mui/material'

export const useGlobalStyle = makeStyles((theme: Theme) => ({
  '@global': {
    code: {
      fontFamily: 'roboto',
      background: '#eee',
      padding: theme.spacing(1),
      borderRadius: theme.shape.borderRadius
    },
    pre: {
      margin: '0 0 !important',
      borderRadius: theme.shape.borderRadius
    },
    '.main-container :is(h1, h2, h3)': {
      borderBottom: `1px solid ${theme.palette.grey['300']}`,
      paddingBottom: theme.spacing(0.5)
    }
  }
}))
