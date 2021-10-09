import { makeStyles } from '@mui/styles'

import type { Theme } from '@mui/material'

export const useGlobalStyle = makeStyles((theme: Theme) => ({
  '@global': {
    body: {
      fontFamily: 'Lato'
    },
    code: {
      fontFamily: 'Lato',
      fontSize: '15px !important',
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
    },
    table: {
      display: 'block',
      maxWidth: '100%',
      overflow: 'auto',
      border: '1px solid #f5f5f5',
      '& thead tr th': {
        borderBottom: '1px solid #ccc',
        padding: theme.spacing(1)
      },
      '& tbody tr:nth-child(even)': {
        backgroundColor: '#f5f5f5'
      },
      '& tbody tr td': {
        padding: theme.spacing(1)
      }
    },
    '.main-container a[target="_blank"]': {
      '&::after': {
        fontSize: theme.spacing(1.5),
        content:
          'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48cGF0aCBkPSJNOSAyTDkgMyAxMi4zIDMgNiA5LjMgNi43IDEwIDEzIDMuNyAxMyA3IDE0IDcgMTQgMlpNNCA0QzIuOSA0IDIgNC45IDIgNkwyIDEyQzIgMTMuMSAyLjkgMTQgNCAxNEwxMCAxNEMxMS4xIDE0IDEyIDEzLjEgMTIgMTJMMTIgNyAxMSA4IDExIDEyQzExIDEyLjYgMTAuNiAxMyAxMCAxM0w0IDEzQzMuNCAxMyAzIDEyLjYgMyAxMkwzIDZDMyA1LjQgMy40IDUgNCA1TDggNSA5IDRaIi8+PC9zdmc+")'
      }
    }
  }
}))
